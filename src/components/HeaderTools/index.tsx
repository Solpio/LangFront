import React from 'react'
import Theme from '../Theme'
import styled from 'styled-components'
import Profile from '../Profile'

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

function HeaderTools() {
  return (
    <Wrapper>
      <Theme></Theme>
      <Profile></Profile>
    </Wrapper>
  )
}

export default HeaderTools
