import React from 'react'
import styled from 'styled-components'
import Logo from '../../components/Logo'
import MainPic from '../../assets/img/mainPic.png'
import Button from '../../components/Button'
import MainCard from '../../components/MainCard'
const Wrapper = styled.div``

const InnerWrapper = styled.div`
  box-sizing: border-box;
  padding: 0 10px;
  max-width: 1100px;
  min-height: 100vh;
  margin: 0 auto;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }
`
const Registration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
`

const RegistrationWrapper = styled.div`
  margin-top: 25px;
`

const Image = styled.img`
  box-sizing: border-box;
  max-width: 662px;
  max-height: 399px;
  padding: 0 20px;
  width: 100%;
  height: 100%;
`

const TextUnderContainer = styled.p`
  text-align: center;
  font-size: 1.8rem;
  margin: 70px 0;
`

const DescriptionImagesContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  @media (max-width: 400px) {
    max-width: 150px;
  }
`

const CardWrapper = styled.div`
  gap: 50px;
  display: flex;
  @media (max-width: 700px) {
    gap: 30px;
  }
  @media (max-width: 400px) {
    flex-direction: column;
  }
`

const AfterImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function MainPage() {
  return (
    <Wrapper>
      <InnerWrapper>
        <MainContainer>
          <Registration>
            <Logo isSingle={false}></Logo>
            <RegistrationWrapper>
              <Button type={'registration'} to={'/auth/registration'}>
                Присоединиться
              </Button>
            </RegistrationWrapper>
          </Registration>
          <Image src={MainPic}></Image>
        </MainContainer>
        <TextUnderContainer>
          Сделай свой путь к изучению языка намного проще, а мы тебе в этом
          поможем
        </TextUnderContainer>
        <DescriptionImagesContainer>
          <CardWrapper>
            <MainCard></MainCard>
            <MainCard></MainCard>
          </CardWrapper>
          <CardWrapper>
            <MainCard></MainCard>
            <MainCard></MainCard>
          </CardWrapper>
          <CardWrapper>
            <MainCard></MainCard>
            <MainCard></MainCard>
          </CardWrapper>
        </DescriptionImagesContainer>
        <AfterImagesWrapper>
          <RegistrationWrapper>
            <Button type={'registration'} to={'/auth/registration'}>
              Присоединиться
            </Button>
          </RegistrationWrapper>
        </AfterImagesWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default MainPage
