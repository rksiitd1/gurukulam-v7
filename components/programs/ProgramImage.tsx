"use client";
import Image from "next/image";
import React from "react";

type ProgramImageProps = React.ComponentProps<typeof Image>;

export default function ProgramImage(props: ProgramImageProps) {
  return (
    <Image
      {...props}
      placeholder={props.placeholder ?? "empty"}
      sizes={props.sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      onContextMenu={e => e.preventDefault()}
    />
  );
} 