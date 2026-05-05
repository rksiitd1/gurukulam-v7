/**
 * Image Optimization Script for Divya Bihar Mission
 * 
 * Compresses all oversized images in the public directory using sharp.
 * - JPGs > 200KB → re-compress at quality 75
 * - PNGs > 200KB → convert to JPG (except logos/icons) or optimize
 * - Preserves original files as .original backups
 * 
 * Usage: node scripts/optimize-images.mjs
 */

import { readdir, stat, rename, unlink } from 'fs/promises';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Files/patterns to skip (logos, icons, favicons)
const SKIP_PATTERNS = [
  'favicon', 'apple-touch-icon', 'android-chrome',
  'placeholder', 'safari-pinned', 'icon.svg'
];

const SIZE_THRESHOLD = 200 * 1024; // 200KB
const MAX_WIDTH = 1920; // Max width for any image
const JPG_QUALITY = 75;
const PNG_QUALITY = 80;

let sharp;
try {
  sharp = (await import('sharp')).default;
} catch {
  console.error('❌ sharp is not installed. Run: npm install -D sharp');
  console.error('   Then re-run: node scripts/optimize-images.mjs');
  process.exit(1);
}

let totalSaved = 0;
let filesProcessed = 0;
let filesSkipped = 0;

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
      files.push(...await getAllImages(fullPath));
    } else {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function shouldSkip(filePath) {
  const name = basename(filePath).toLowerCase();
  return SKIP_PATTERNS.some(p => name.includes(p));
}

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

async function optimizeImage(filePath) {
  const fileStats = await stat(filePath);
  const originalSize = fileStats.size;

  if (originalSize < SIZE_THRESHOLD) {
    filesSkipped++;
    return;
  }

  if (shouldSkip(filePath)) {
    console.log(`⏭️  Skipping (protected): ${basename(filePath)}`);
    filesSkipped++;
    return;
  }

  const ext = extname(filePath).toLowerCase();
  const relativePath = filePath.replace(PUBLIC_DIR, '');

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = sharp(filePath);

    // Resize if wider than MAX_WIDTH
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    let outputPath = filePath;
    let outputBuffer;

    if (ext === '.png') {
      // For PNGs, try both PNG optimization and JPG conversion
      const pngBuffer = await pipeline.clone().png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer();
      const jpgBuffer = await pipeline.clone().jpeg({ quality: JPG_QUALITY, progressive: true }).toBuffer();

      // Use whichever is smaller, prefer JPG for photos
      if (jpgBuffer.length < pngBuffer.length && jpgBuffer.length < originalSize * 0.8) {
        outputBuffer = jpgBuffer;
        outputPath = filePath.replace(/\.png$/i, '.jpg');
        // Keep the PNG path working — we'll just overwrite
        // The component references will need updating if changed
        // For safety, keep as PNG but compress
        outputBuffer = pngBuffer.length < originalSize ? pngBuffer : jpgBuffer;
        outputPath = filePath; // Keep original path
      } else {
        outputBuffer = pngBuffer;
      }

      // Final: just compress as PNG if it saves space
      if (pngBuffer.length < originalSize) {
        outputBuffer = pngBuffer;
        outputPath = filePath;
      } else if (jpgBuffer.length < originalSize) {
        // PNG didn't help, try saving alongside as JPG for reference
        outputBuffer = jpgBuffer;
        outputPath = filePath; // Keep PNG path for compatibility
      }

      // Simple approach: just optimize as PNG
      outputBuffer = await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9, palette: true }).toBuffer();
      if (outputBuffer.length >= originalSize) {
        // PNG optimization didn't help, try JPEG
        outputBuffer = await pipeline.jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();
        if (outputBuffer.length >= originalSize) {
          console.log(`⏭️  Already optimized: ${relativePath} (${formatSize(originalSize)})`);
          filesSkipped++;
          return;
        }
      }
    } else {
      // JPEG optimization
      outputBuffer = await pipeline.jpeg({ quality: JPG_QUALITY, progressive: true, mozjpeg: true }).toBuffer();
      if (outputBuffer.length >= originalSize) {
        console.log(`⏭️  Already optimized: ${relativePath} (${formatSize(originalSize)})`);
        filesSkipped++;
        return;
      }
    }

    const newSize = outputBuffer.length;
    const saved = originalSize - newSize;
    const percent = ((saved / originalSize) * 100).toFixed(1);

    // Backup original
    const backupPath = filePath + '.original';
    await rename(filePath, backupPath);

    // Write optimized version
    await sharp(outputBuffer).toFile(filePath);

    totalSaved += saved;
    filesProcessed++;
    console.log(`✅ ${relativePath}: ${formatSize(originalSize)} → ${formatSize(newSize)} (-${percent}%)`);

  } catch (err) {
    console.error(`❌ Error processing ${relativePath}: ${err.message}`);
  }
}

async function main() {
  console.log('🔍 Scanning for images in public/ ...\n');
  
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images total\n`);

  // Sort by size (largest first) for visibility
  const imageSizes = await Promise.all(
    images.map(async (f) => ({ path: f, size: (await stat(f)).size }))
  );
  imageSizes.sort((a, b) => b.size - a.size);

  for (const { path: imgPath } of imageSizes) {
    await optimizeImage(imgPath);
  }

  console.log('\n' + '='.repeat(50));
  console.log(`📊 Summary:`);
  console.log(`   Files optimized: ${filesProcessed}`);
  console.log(`   Files skipped: ${filesSkipped}`);
  console.log(`   Total saved: ${formatSize(totalSaved)}`);
  console.log('='.repeat(50));

  if (filesProcessed > 0) {
    console.log('\n💡 Original files saved as .original backups.');
    console.log('   To delete backups after verifying: node -e "const {readdir,unlink}=require(\'fs/promises\');const {join}=require(\'path\');(async()=>{const find=async d=>{const e=await readdir(d,{withFileTypes:true});for(const f of e){const p=join(d,f.name);if(f.isDirectory())await find(p);else if(f.name.endsWith(\'.original\'))await unlink(p).then(()=>console.log(\'Deleted:\',p))}};await find(\'public\')})()"');
  }
}

main().catch(console.error);
