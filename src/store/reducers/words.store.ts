import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IWordsProps, IWordsStore } from '../../types/word.interface'
import { getWords } from '../../api/words.api'
import { MAX_WORDS_PER_PAGE } from '../../constants/constants'

export const getWordsAsync = createAsyncThunk(
  '/words',
  async (params: IWordsProps) => {
    return await getWords(params)
  }
)
interface IGroupPageStore {
  data: IWordsStore
  status: 'loading' | 'fulfilled' | 'rejected'
  page: number
  maxPages: number
}

const initialState: IGroupPageStore = {
  data: { words: [], total: 0 },
  status: 'loading',
  page: 0,
  maxPages: 0,
}

const WordsSlice = createSlice({
  name: 'words',
  initialState: initialState,
  reducers: {
    nextPage: (state) => {
      if (state.maxPages - 1 > state.page) {
        state.page += 1
      }
    },
    prevPage: (state) => {
      if (0 < state.page) {
        state.page -= 1
      }
    },
    savePage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWordsAsync.pending, (state) => {
      state.data = { words: [], total: 0 }
      state.status = 'loading'
    })
    builder.addCase(getWordsAsync.rejected, (state) => {
      state.status = 'rejected'
    })
    builder.addCase(getWordsAsync.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.data = action.payload.words
      state.maxPages = Math.floor(state.data.total / MAX_WORDS_PER_PAGE)
    })
  },
})
export const { nextPage, prevPage, savePage } = WordsSlice.actions
export default WordsSlice.reducer
