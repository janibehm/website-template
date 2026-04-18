'use client'

import {SanityImage as SanityImageNext} from 'sanity-image'
import {dataset, projectId} from '@/sanity/lib/api'

type SanityImageProps = {
  id: string
  alt?: string
  width?: number
  height?: number
  crop?: {
    _type?: 'sanity.imageCrop'
    top?: number
    bottom?: number
    left?: number
    right?: number
  } | null
  hotspot?: {
    _type?: 'sanity.imageHotspot'
    x?: number
    y?: number
    height?: number
    width?: number
  } | null
  mode?: 'cover' | 'contain'
  className?: string
  preview?: string
}

export default function SanityImage({
  id,
  alt = '',
  width,
  height,
  crop,
  hotspot,
  mode = 'cover',
  className = '',
  preview,
}: SanityImageProps) {
  return (
    <SanityImageNext
      id={id}
      projectId={projectId}
      dataset={dataset}
      alt={alt}
      width={width}
      height={height}
      crop={crop as {top: number; bottom: number; left: number; right: number} | null | undefined}
      hotspot={hotspot as {x: number; y: number} | null | undefined}
      mode={mode}
      className={className}
      preview={preview}
    />
  )
}
