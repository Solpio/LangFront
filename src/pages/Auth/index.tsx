import React from 'react'
import styled from 'styled-components'
import RegistrationForm from '../../components/RegistrationForm'
import LoginForm from '../../components/LoginForm'

interface IAuthPage {
  type: 'login' | 'registration'
}

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #dedede;
  padding: 1px 0;
`

const InnerWrapper = styled.div`
  box-sizing: border-box;
  max-width: 650px;
  background-color: white;
  margin: 50px auto;
  border: 1px solid;
  border-radius: 20px;
`

function AuthPage({ type }: IAuthPage) {
  return (
    <Wrapper>
      <InnerWrapper>
        {type === 'login' ? (
          <LoginForm></LoginForm>
        ) : (
          <RegistrationForm></RegistrationForm>
        )}
      </InnerWrapper>
    </Wrapper>
  )
}

export default AuthPage
