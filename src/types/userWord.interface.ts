export interface IUserWord {
  id: string
  userId: string
  wordId: string
  status: string
  createdAt: Date
  updatedAt: Date
}

export interface IGetUserWordParams {
  query: {
    id: string
  }
}
export interface ISetUserWordParams {
  reduxId: number
  query: {
    id: string
    status: 'favorite' | 'forgotten' | 'new' | 'learned'
  }
}
