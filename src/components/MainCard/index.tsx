import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import MainSvg from '../MainSVG/book.svg'
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
`

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  max-height: 300px;
  border-radius: 50%;
  justify-content: center;
  background-color: #d9f5ff;
  margin: 25px 0;
`
const Text = styled.p`
  text-align: center;
  font-size: 1.6rem;
`
interface IMainCardProps {
  svg: FunctionComponent
  text: string
  title: string
}

function MainCard({ text, svg, title }: IMainCardProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ImgContainer>{svg({})}</ImgContainer>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default MainCard
