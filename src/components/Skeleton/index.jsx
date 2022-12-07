import React from 'react'
import { SkeletonStyled } from './style'

export default function Skeleton({shape = "rectangle", width, height, children, ...props}) {
  return (
    <SkeletonStyled {...props} className={`${shape} ${props.className ?? ''}`} style={{width, height, ...props.style}}>{children}</SkeletonStyled>
  )
}
 