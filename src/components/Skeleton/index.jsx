import React from 'react'
import { SkeletonStyled } from './style'

export default function Skeleton({shape = "rectangle", width, height, children}) {
  return (
    <SkeletonStyled className={shape} style={{width, height}}>{children}</SkeletonStyled>
  )
}
 