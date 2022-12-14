export interface IWords {
  id: 'string'
  group: number
  page: number
  word: 'string'
  image: 'string'
  audio: 'string'
  audioMeaning: 'string'
  audioExample: 'string'
  textMeaning: 'string'
  textExample: 'string'
  transcription: 'string'
  wordTranslate: 'string'
  textMeaningTranslate: 'string'
  textExampleTranslate: 'string'
}

export interface IWordsStore {
  words: Array<IWords>
  total: number
}

export interface IWordsProps {
  query: {
    offset: number
    group: number
    limit: number
  }
}
