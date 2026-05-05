"use client";
import Image from "next/image";
import React from "react";

type ProgramImageProps = React.ComponentProps<typeof Image>;

export default function ProgramImage(props: ProgramImageProps) {
  // Only use blur placeholder when blurDataURL is available (static imports)
  // String src paths don't support placeholder="blur" without blurDataURL
  const hasBlurData = typeof props.src === 'object' && 'blurDataURL' in props.src;
  
  return (
    <Image
      {...props}
      placeholder={hasBlurData ? "blur" : "empty"}
      sizes={props.sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      loading={props.loading ?? "lazy"}
      onContextMenu={e => e.preventDefault()}
    />
  );
}