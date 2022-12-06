import React from 'react'
import { ButtonStyled } from './style'
import { LoadingOutlined} from '@ant-design/icons'

export default function Button({loading, children}) {
  return (
   <ButtonStyled disabled = {loading} className='btn main rect'>
   {loading && <LoadingOutlined style={{marginRight:15, fontSize:25 }}/> }
   {children}
   </ButtonStyled>
  )
}
