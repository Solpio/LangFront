import React from 'react'
import styled from 'styled-components'
import MainSvg from '../MainSVG'
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

function MainCard() {
  return (
    <Wrapper>
      <Title>Text</Title>
      <ImgContainer>
        <MainSvg></MainSvg>
      </ImgContainer>
      <Text>4000 новых слов</Text>
    </Wrapper>
  )
}

export default MainCard
