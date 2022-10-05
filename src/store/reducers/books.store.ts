import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBooks } from '../../api/book.api'
import { IBooks } from '../../types/books.interface'

export const getBooksAsync = createAsyncThunk('/section/books', async () => {
  return await getBooks()
})

export interface IBooksState {
  data: Array<IBooks>
  status: 'loading' | 'fulfilled' | 'rejected'
}

export const initialState: IBooksState = {
  data: [],
  status: 'loading',
}

const BooksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooksAsync.pending, (state) => {
      state.status = 'loading'
    })
    builder.addCase(getBooksAsync.fulfilled, (state, action) => {
      state.data = action.payload.groupMas
      state.status = 'fulfilled'
    })
    builder.addCase(getBooksAsync.rejected, (state) => {
      state.status = 'rejected'
    })
  },
})

export default BooksSlice.reducer
