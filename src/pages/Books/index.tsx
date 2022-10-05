import React, { useEffect } from 'react'
import styled from 'styled-components'
import Chapter from '../../components/Chapter'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBooksAsync } from '../../store/reducers/books.store'
import {
  TextUnderTitlePage,
  TitlePage,
  TitleWrapper,
} from '../../components/Title'

const Wrapper = styled.div`
  padding-top: 69px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  min-height: 100vh;
`

const ChaptersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`

function BooksPage() {
  const dispatch = useAppDispatch()
  const { data, status } = useAppSelector((state) => {
    return state.books
  })
  useEffect(() => {
    if (status === 'loading') {
      dispatch(getBooksAsync())
    }
  }, [data])
  console.log(data)
  return (
    <Wrapper>
      <TitleWrapper>
        <TitlePage>Учебник</TitlePage>
        <TextUnderTitlePage>Выбирай раздел и изучай слова</TextUnderTitlePage>
        <ChaptersWrapper>
          {data
            ? data.map((chapter, id) => {
                return <Chapter id={id} key={`raw${id}`}></Chapter>
              })
            : `${data}`}
        </ChaptersWrapper>
      </TitleWrapper>
    </Wrapper>
  )
}

export default BooksPage
