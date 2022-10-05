import React from 'react'
import { useForm } from 'react-hook-form'
import { FormUI } from '../UI/Form'
import { loginAsync } from '../../store/reducers/auth.store'
import { Navigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import CustomInput from '../Input'

function Index() {
  interface ILoginForm {
    password: string
    login: string
  }
  const dispatch = useAppDispatch()
  const AppSelector = useAppSelector((state) => state.auth)
  const isAuth = !!AppSelector.login.token
  const {
    Wrapper,
    TitleWrapper,
    InputWrapper,
    Title,
    Form,
    TextUnderTitle,
    Submit,
    Label,
  } = FormUI

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    mode: 'onSubmit',
  })
  const onSubmit = async (values: ILoginForm) => {
    const result = await dispatch(loginAsync({ body: values }))
    if (result.payload) {
      if ('token' in result.payload) {
        window.localStorage.setItem('token', result.payload.token)
      }
    }
  }
  let validationError
  let serverError
  if (Array.isArray(AppSelector.errors)) {
    validationError = AppSelector.errors
  } else {
    serverError = AppSelector.errors
  }
  if (isAuth) {
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Вход в аккаунт</Title>
        <TextUnderTitle>Добро пожаловать. Снова</TextUnderTitle>
      </TitleWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor={'login'}>Email or username</Label>
          <CustomInput
            register={{
              ...register('login', {
                required: 'Укажите юзернейм или почту',
              }),
            }}
            errors={errors.login}
            errorsMessage={errors.login?.message}
            isValid={isValid}
            placeholder={'Укажите юзернейм или почту'}
            customServerErrors={serverError ? serverError.message : null}
            customValidationErrors={
              validationError
                ? validationError.find((err) => {
                    if (err.param === 'username') {
                      return err
                    }
                  })
                : null
            }
          ></CustomInput>
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor={'password'}>Password</Label>
          <CustomInput
            register={{
              ...register('password', {
                required: 'Укажите пароль',
                minLength: 5,
              }),
            }}
            errors={errors.password}
            errorsMessage={errors.password?.message}
            isValid={isValid}
            placeholder={'Укажите пароль'}
            customValidationErrors={
              validationError
                ? validationError.find((err) => {
                    if (err.param === 'password') {
                      return err
                    }
                  })
                : null
            }
          ></CustomInput>
        </InputWrapper>
        <Submit type={'submit'} value={'Войти'}></Submit>
      </Form>
    </Wrapper>
  )
}

export default Index
