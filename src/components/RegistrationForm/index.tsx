import React from 'react'
import { FormUI } from '../UI/Form'
import { useForm } from 'react-hook-form'
import CustomInput from '../Input'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { createUserAsync } from '../../store/reducers/auth.store'
import { Navigate } from 'react-router-dom'

function RegistrationForm() {
  interface IRegistrationForm {
    email: string
    password: string
    username: string
  }

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    mode: 'onSubmit',
  })

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

  const onSubmit = async (values: IRegistrationForm) => {
    const result = await dispatch(createUserAsync({ body: values }))
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
        <Title>Регистрация</Title>
        <TextUnderTitle>Скорее создавай аккаунт.</TextUnderTitle>
      </TitleWrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor={'email'}>Email</Label>
          <CustomInput
            register={{
              ...register('email', {
                required: 'Укажите почту',
              }),
            }}
            type={'email'}
            errors={errors.email}
            errorsMessage={errors.email?.message}
            isValid={isValid}
            placeholder={'Укажите почту'}
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
          <Label htmlFor={'username'}>Username</Label>
          <CustomInput
            register={{
              ...register('username', {
                required: 'Укажите имя пользователя',
                minLength: 5,
                maxLength: 12,
              }),
            }}
            errors={errors.username}
            errorsMessage={errors.username?.message}
            isValid={isValid}
            placeholder={'Укажите имя пользователя'}
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
        <Submit type={'submit'} value={'Зарегистрироваться'}></Submit>
      </Form>
    </Wrapper>
  )
}

export default RegistrationForm
