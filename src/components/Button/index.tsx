import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RegistrationButton = styled(Link)`
  box-sizing: border-box;
  background-color: #d9f5ff;
  border: 1px solid;
  padding: 10px 26px;
  font-weight: 400;
  font-size: 2rem;
  font-family: 'Dodo Rounded v2', serif;
`

interface IButtonType {
  type: string
  children: string
  to: string
}

function Button({ type, children, to }: IButtonType) {
  return type === 'registration' ? (
    <RegistrationButton to={to} type={'button'}>
      {children}
    </RegistrationButton>
  ) : null
}

export default Button
