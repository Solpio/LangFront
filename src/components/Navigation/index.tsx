import React from 'react'
import styled from 'styled-components'
import Icon from '../HeaderIcon'
import { DecorationLink } from '../Link'

const Table = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  @media (max-width: 700px) {
    gap: 0;
  }
`

const TableItem = styled.li`
  padding: 10px;
`
const StyledLink = styled(DecorationLink)`
  display: flex;
  gap: 5px;
`

function Navigation() {
  console.log(StyledLink)
  return (
    <Table>
      <TableItem>
        <StyledLink to={'/books'}>
          <Icon type={'book'} />
          Учебник
        </StyledLink>
      </TableItem>
      {/*<TableItem>*/}
      {/*  <StyledLink to={'/games'}>*/}
      {/*    <Icon type={'games'} />*/}
      {/*    Игры*/}
      {/*  </StyledLink>*/}
      {/*</TableItem>*/}
      {/*<TableItem>*/}
      {/*  <StyledLink to={'/stats'}>*/}
      {/*    <Icon type={'stats'} />*/}
      {/*    Статистика*/}
      {/*  </StyledLink>*/}
      {/*</TableItem>*/}
    </Table>
  )
}

export default Navigation
