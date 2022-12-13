import React from 'react'
import { ButtonContainerCreate } from './styles'

const Button = ({title}) => {
  return (
    <ButtonContainerCreate>
      {title}
    </ButtonContainerCreate>
  )
}

export default Button;