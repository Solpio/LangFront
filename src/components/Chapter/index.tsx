import React from 'react'
import styled from 'styled-components'
import { DecorationLink } from '../Link'

const ChapterButton = styled(DecorationLink)``

interface IChapterProps {
  id: number
}

function Chapter({ id }: IChapterProps) {
  return <ChapterButton to={`/books/${id}/page`}>Раздел {id}</ChapterButton>
}

export default Chapter
