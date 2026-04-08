// lib/firebase/admin.ts
import { initializeApp, getApps, cert, type App } from 'firebase-admin/app';
import { getFirestore, type Firestore } from 'firebase-admin/firestore';

let _db: Firestore | null = null;

function getApp(): App {
  if (getApps().length) {
    return getApps()[0];
  }

  return initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID!,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    }),
  });
}

/**
 * Lazy-initialized Firestore instance.
 * This avoids crashing at build time when env vars aren't available.
 */
export function getDb(): Firestore {
  if (!_db) {
    getApp();
    _db = getFirestore();
  }
  return _db;
}
