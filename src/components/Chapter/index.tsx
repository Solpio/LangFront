import React from 'react'
import styled from 'styled-components'
import { DecorationLink } from '../Link'

const ChapterButton = styled(DecorationLink)`
  padding: 20px;
  margin: 10px;
  text-align: center;
  font-size: 2rem;
  background-color: #d9f5ff;
`

interface IChapterProps {
  id: number
}

function Chapter({ id }: IChapterProps) {
  return <ChapterButton to={`/books/${id}/page`}>Раздел {id + 1}</ChapterButton>
}

export default Chapter
