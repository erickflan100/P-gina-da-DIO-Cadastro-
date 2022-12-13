import React from 'react'
import { InputContainer } from './styles'

const Input = ({type, placeholder}) => {
  return (
    <InputContainer type={type} placeholder={placeholder}></InputContainer>
  )
}

export default Input;