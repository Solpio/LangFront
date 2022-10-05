import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
  TextUnderTitlePage,
  TitlePage,
  TitleWrapper,
} from '../../components/Title'
import GroupCard from '../../components/GroupCard'
import { Navigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { getBooksAsync } from '../../store/reducers/books.store'
import {
  getWordsAsync,
  nextPage,
  prevPage,
} from '../../store/reducers/words.store'
import { createUserWordsAsync } from '../../store/reducers/userWords.store'
import { IWordsProps } from '../../types/word.interface'
import Skeleton from '../../components/GroupCard/skeleton'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 1px;
`

const CardsWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  padding: 0 10px;
  flex-direction: column;
  gap: 20px 0;
  align-items: center;
`

const PaginationButton = styled.button`
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 1px solid black;
`
const Pagination = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
const limit = 20

function GroupPage() {
  const { login } = useAppSelector((state) => state.auth)
  const isAuth = !!login.token
  const { data, status: booksStatus } = useAppSelector((state) => state.books)
  const {
    data: words,
    status,
    maxPages,
    page,
  } = useAppSelector((state) => state.words)
  const { data: userData, status: userStatus } = useAppSelector(
    (state) => state.userWords
  )
  const { id, num } = useParams()
  const { userWords } = userData
  console.log(maxPages)
  const params: IWordsProps = {
    query: {
      group: Number(id),
      limit: limit,
      offset: page * limit,
    },
  }
  const dispatch = useAppDispatch()
  console.log(booksStatus, 'booksStatus')
  useEffect(() => {
    if (!data.length) {
      dispatch(getBooksAsync())
    }
    dispatch(getWordsAsync(params))
    if (isAuth) {
      dispatch(createUserWordsAsync(params))
    }
  }, [id, num, page])

  if (status === 'rejected') {
    return <Navigate to={`/books/${id}/page/${page}`}></Navigate>
  }

  const onNextPage = () => {
    return dispatch(nextPage())
  }
  const onPrevPage = () => {
    return dispatch(prevPage())
  }
  console.log(page)
  return (
    <Wrapper>
      <TitleWrapper>
        <TitlePage>Раздел {id ? +id + 1 : 'null'}</TitlePage>
        <TextUnderTitlePage>
          Добавляй слова в избранное или в изученное
        </TextUnderTitlePage>
        <TextUnderTitlePage>
          Двойной клик по карточке - изученное
        </TextUnderTitlePage>
        <TextUnderTitlePage>Клик по звезде - избранное</TextUnderTitlePage>
        <TextUnderTitlePage>
          Слово может быть либо избранным, либо изученным
        </TextUnderTitlePage>
        <CardsWrapper>
          {isAuth
            ? userStatus === 'fulfilled'
              ? words.words.map((word, i) => {
                  return (
                    <GroupCard
                      word={word}
                      userWord={userWords[i]}
                      key={`rawCard${i}`}
                      reduxId={i}
                    ></GroupCard>
                  )
                })
              : [...Array(6)].map((item, key) => {
                  return <Skeleton key={`rawSkeleton${key}`}></Skeleton>
                })
            : status === 'fulfilled'
            ? words.words.map((word, i) => {
                return (
                  <GroupCard
                    word={word}
                    key={`rawCard${i}`}
                    reduxId={i}
                  ></GroupCard>
                )
              })
            : [...Array(6)].map((item, key) => {
                return <Skeleton key={`rawSkeleton${key}`}></Skeleton>
              })}
        </CardsWrapper>
        <Pagination>
          <PaginationButton onClick={onPrevPage} disabled={!page}>
            {page === 0 ? 0 : page - 1}
          </PaginationButton>
          <div>{page}</div>
          <PaginationButton onClick={onNextPage} disabled={page === maxPages}>
            {page === maxPages ? maxPages : page + 1}
          </PaginationButton>
        </Pagination>
      </TitleWrapper>
    </Wrapper>
  )
}

export default GroupPage
