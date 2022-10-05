import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ISetUserWordParams, IUserWord } from '../../types/userWord.interface'
import { createUserWords, setWordStatus } from '../../api/userWords.api'
import { IWordsProps } from '../../types/word.interface'

interface IUserWordsStore {
  data: { userWords: Array<IUserWord> }
  status: 'loading' | 'fulfilled' | 'rejected'
}
const initialState: IUserWordsStore = {
  data: { userWords: [] },
  status: 'loading',
}

export const createUserWordsAsync = createAsyncThunk(
  'createWords',
  async (params: IWordsProps) => {
    return await createUserWords(params)
  }
)

export const setUserWordAsync = createAsyncThunk(
  'setUserWord',
  async (params: ISetUserWordParams) => {
    return { word: await setWordStatus(params), id: params.reduxId }
  }
)

const userWordSlice = createSlice({
  name: 'userWords',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUserWordsAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(createUserWordsAsync.rejected, (state) => {
      state.data = { userWords: [] }
      state.status = 'rejected'
    })
    builder.addCase(createUserWordsAsync.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.data = action.payload.words
    })
    builder.addCase(setUserWordAsync.fulfilled, (state, action) => {
      state.data.userWords[action.payload.id] = action.payload.word.word
    })
  },
})

export default userWordSlice.reducer
