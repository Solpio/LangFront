import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px auto;
`
const TitleWrapper = styled.div`
  margin-bottom: 20px;
`
const Title = styled.h2`
  font-size: 3rem;
`
const TextUnderTitle = styled.p`
  color: rgba(40, 44, 64, 0.6);
  font-size: 1.2rem;
`

const InputWrapper = styled.div`
  margin-bottom: 10px;
  font-size: 1.4rem;
`
const Label = styled.label`
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
`
const Form = styled.form`
  width: 100%;
`

const Submit = styled.input`
  width: 100%;
  font-size: 1.5rem;
  padding: 15px 0;
  margin-top: 20px;
  margin-bottom: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  background: linear-gradient(180deg, #ffb648 0%, #fdc064 100%);
`

export const FormUI = {
  Wrapper,
  TitleWrapper,
  InputWrapper,
  Form,
  Label,
  Submit,
  TextUnderTitle,
  Title,
}
