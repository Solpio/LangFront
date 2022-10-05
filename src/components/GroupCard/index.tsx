import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Star from '../Star'
import Sound from '../Sound'
import { IWords } from '../../types/word.interface'
import { API_ENDPOINT } from '../../constants/constants'
import { IUserWord } from '../../types/userWord.interface'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setUserWordAsync } from '../../store/reducers/userWords.store'
import { divideWords } from '../../helpers/divideWords'

interface ICardWrapper {
  learned: boolean
}

const Wrapper = styled.div`
  border: 1px solid black;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1px;
  position: relative;
  user-select: none;
`

const InnerWrapper = styled.div<ICardWrapper>`
  background-color: ${(props) => (props.learned ? '#d9f5ff' : '#ffffff')};
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
`
const Header = styled.div``
const StarWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`
const CardLang = styled.div`
  font-size: 2.3rem;
  font-style: italic;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
const Article = styled.h3`
  text-align: center;
  font-size: 3.2rem;
  font-style: italic;
  font-weight: 600;
`
const UnderArticle = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
  font-size: 2rem;
  font-style: italic;
`
const Transcription = styled.p`
  margin: 0;
`
const WordWrapper = styled.div``
const SoundWrapper = styled.div`
  min-width: 20px;
  height: 20px;
  cursor: pointer;
`
const WordInfo = styled.div`
  margin: 10px 0;
`
const WordInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px;
  text-align: center;
  font-size: 2rem;
  font-style: italic;
`
const WordInfoArticle = styled.h4`
  font-size: 2rem;
  font-style: italic;
`
const WordInfoText = styled.div`
  text-align: center;
  margin: 0;
  font-size: 2rem;
  font-style: italic;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const PartOfWord = styled.div`
  display: inline-block;
`
const StyledMeaning = styled(PartOfWord)`
  color: red;
`

const StyledExample = styled(PartOfWord)`
  border-bottom: 1px darkblue dotted;
`

interface IGroupCardProps {
  word: IWords
  userWord?: IUserWord
  reduxId: number
}

const GroupCard = ({ word, userWord, reduxId }: IGroupCardProps) => {
  const [isLearned, setIsLearned] = useState(false)
  const [isOriginalLang, setOriginalLang] = useState(true)
  const audioWord = new Audio(`${API_ENDPOINT}${word.audio}`)
  const audioMeaning = new Audio(`${API_ENDPOINT}${word.audioMeaning}`)
  const audioExample = new Audio(`${API_ENDPOINT}${word.audioExample}`)
  const dispatch = useAppDispatch()
  function StopPlayAudio() {
    const mas = [audioWord, audioMeaning, audioExample]
    mas.forEach((element) => {
      element.pause()
      element.currentTime = 0
    })
  }

  userWord
    ? useEffect(() => {
        if (userWord.status === 'learned') {
          setIsLearned(true)
        } else {
          setIsLearned(false)
        }
      }, [userWord.status])
    : null

  const { mas: wordMeaningMas, a: wordMeaningWord } = divideWords(
    word.textMeaning
  )
  const { mas: wordExampleMas, a: wordExampleWord } = divideWords(
    word.textExample
  )
  return (
    <Wrapper
      onDoubleClick={() => {
        if (userWord) {
          userWord.status === 'learned'
            ? dispatch(
                setUserWordAsync({
                  reduxId: reduxId,
                  query: {
                    status: 'new',
                    id: userWord.wordId,
                  },
                })
              )
            : dispatch(
                setUserWordAsync({
                  reduxId: reduxId,
                  query: {
                    status: 'learned',
                    id: userWord.wordId,
                  },
                })
              )
        }
      }}
    >
      <InnerWrapper learned={isLearned}>
        <Header>
          <StarWrapper>
            {userWord ? (
              <Star
                isFavorite={userWord.status === 'favorite'}
                onClick={() => {
                  userWord.status !== 'favorite'
                    ? dispatch(
                        setUserWordAsync({
                          reduxId: reduxId,
                          query: {
                            status: 'favorite',
                            id: userWord.wordId,
                          },
                        })
                      )
                    : dispatch(
                        setUserWordAsync({
                          reduxId: reduxId,
                          query: {
                            status: 'new',
                            id: userWord.wordId,
                          },
                        })
                      )
                }}
              ></Star>
            ) : null}
          </StarWrapper>
          <CardLang onClick={() => setOriginalLang(!isOriginalLang)}>
            {isOriginalLang ? 'ENG' : 'RU'}
          </CardLang>
          <Article>{isOriginalLang ? word.word : word.wordTranslate}</Article>
          <UnderArticle>
            <Transcription>{word.transcription}</Transcription>
            <SoundWrapper
              onClick={async () => {
                StopPlayAudio()
                await audioWord.play()
              }}
            >
              <Sound></Sound>
            </SoundWrapper>
          </UnderArticle>
        </Header>
        <WordWrapper>
          <WordInfo>
            <WordInfoArticle>
              {isOriginalLang ? 'Meaning:' : 'Значение:'}
            </WordInfoArticle>
            <WordInfoWrapper>
              <WordInfoText>
                {isOriginalLang ? (
                  <PartOfWord>
                    {wordMeaningMas[0]}
                    <StyledMeaning>{wordMeaningWord}</StyledMeaning>
                    {wordMeaningMas[1]}
                  </PartOfWord>
                ) : (
                  word.textMeaningTranslate
                )}
              </WordInfoText>
              <SoundWrapper
                onClick={async () => {
                  StopPlayAudio()
                  await audioMeaning.play()
                }}
              >
                <Sound></Sound>
              </SoundWrapper>
            </WordInfoWrapper>
          </WordInfo>
          <WordInfo>
            <WordInfoArticle>
              {isOriginalLang ? 'Example:' : 'Пример:'}
            </WordInfoArticle>
            <WordInfoWrapper>
              <WordInfoText>
                {isOriginalLang ? (
                  <PartOfWord>
                    {wordExampleMas[0]}
                    <StyledExample>{wordExampleWord}</StyledExample>
                    {wordExampleMas[1]}
                  </PartOfWord>
                ) : (
                  word.textExampleTranslate
                )}
              </WordInfoText>
              <SoundWrapper
                onClick={async () => {
                  StopPlayAudio()
                  await audioExample.play()
                }}
              >
                <Sound></Sound>
              </SoundWrapper>
            </WordInfoWrapper>
          </WordInfo>
          <Image src={`${API_ENDPOINT}${word.image}`}></Image>
        </WordWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}

export default GroupCard
