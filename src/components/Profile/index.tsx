import React from 'react'
import styled from 'styled-components'
import Anon from '../../assets/img/Person.png'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { logout } from '../../store/reducers/auth.store'
import { DecorationLink } from '../Link'

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`
const Img = styled.img`
  border: 1px solid;
  border-radius: 50%;
  width: 100%;
`

const ImgWrapper = styled.div`
  width: 25px;
  height: 25px;
`

const HeaderButton = styled.button`
  box-sizing: border-box;
  padding: 5px 15px;
  border: 1px solid;
  background: none;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 500;
`

const StyledButton = styled(DecorationLink)`
  box-sizing: border-box;
  padding: 5px 15px;
  border: 1px solid;
  background: none;
  border-radius: 5px;
  font-size: 1.5rem;
  font-weight: 500;
`

function Profile() {
  const AppSelector = useAppSelector((state) => state.auth)
  const isAuth = !!AppSelector.login.token
  const dispatch = useAppDispatch()
  return (
    <Wrapper>
      {isAuth ? (
        <ImgWrapper>
          <Img src={Anon}></Img>
        </ImgWrapper>
      ) : null}
      {isAuth ? (
        <HeaderButton
          onClick={() => {
            dispatch(logout())
            window.location.reload()
          }}
        >
          Выйти
        </HeaderButton>
      ) : (
        <StyledButton to={'/auth/login'}>Войти</StyledButton>
      )}
    </Wrapper>
  )
}

export default Profile
