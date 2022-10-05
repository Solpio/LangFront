import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo'
import Navigation from '../Navigation'
import HeaderTools from '../HeaderTools'

interface IHeaderProps {
  primary?: boolean
}

const HeaderComponent = styled.header<IHeaderProps>`
  background-color: #d9f5ff;
  transition: background-color 0.3s;
`
const HeaderWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  max-width: 1285px;
  width: 100%;
  margin: 0 auto;
  padding: 5px 10px;
`

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding-left: 20px;
  border-left: 1px solid silver;
`
function Header() {
  // const [theme, setTheme] = useState(false)
  return (
    <HeaderComponent primary>
      <HeaderWrapper>
        <Logo isSingle={true}></Logo>
        <InnerWrapper>
          <Navigation></Navigation>
          <HeaderTools></HeaderTools>
        </InnerWrapper>
      </HeaderWrapper>
    </HeaderComponent>
  )
}

export default Header
