import React from 'react'

import styled from 'styled-components'

interface ICustomInput {
  isValid: boolean
}

const Input = styled.input<ICustomInput>`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ebebeb;
  ${(props) =>
    props.isValid
      ? ``
      : `
      border-bottom: 1px solid red;
      transition: border-bottom-color 0.2s;
  `};
  transition: border-bottom-color 0.2s;
  &:focus {
    outline: none !important;
  }
`

const ErrorMess = styled.p`
  color: red;
`

function CustomInput({
  type,
  register,
  errors,
  errorsMessage,
  placeholder,
  customValidationErrors,
  customServerErrors,
}: any) {
  return (
    <>
      <Input
        {...register}
        type={type}
        isValid={!errors && !customValidationErrors && !customServerErrors}
        placeholder={placeholder}
        autoComplete={'off'}
      />
      {errors && <ErrorMess>{errorsMessage}</ErrorMess> && (
        <ErrorMess>Это поле обязательно</ErrorMess>
      )}
      {customValidationErrors && (
        <ErrorMess>{`Пароль должен состоять из:
          Латинских символов A-Z и цифр.
          Содержать хотя бы одну букву в верхнем регистре`}</ErrorMess>
      )}
      {customServerErrors && <ErrorMess>{customServerErrors}</ErrorMess>}
    </>
  )
}

export default CustomInput
