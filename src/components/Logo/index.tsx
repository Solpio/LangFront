import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface ILogo {
  isSingle: boolean
}

const Title = styled.h1<ILogo>`
  font-family: 'Roboto', serif;
  font-style: italic;
  font-weight: 500;
  font-size: ${(props) => (props.isSingle ? '2.5rem' : ' 9rem')};
  ${(props) => (props.isSingle ? 'line-height: 2rem' : null)}
`
const UnderTitleText = styled.p`
  text-align: end;
  font-size: 2rem;
  font-family: 'Roboto', serif;
  font-style: italic;
  font-weight: 300;
`

function Logo({ isSingle }: ILogo) {
  return (
    <Link to={'/'}>
      <Title isSingle={isSingle}>RS Lang</Title>
      {isSingle ? null : (
        <UnderTitleText>Учи английский вместе. </UnderTitleText>
      )}
    </Link>
  )
}

export default Logo
