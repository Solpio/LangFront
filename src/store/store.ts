import { configureStore } from '@reduxjs/toolkit'
import BooksReducer from './reducers/books.store'
import WordsReducer from './reducers/words.store'
import UserWordsReducer from './reducers/userWords.store'
import AuthReducer from './reducers/auth.store'

const store = configureStore({
  reducer: {
    books: BooksReducer,
    words: WordsReducer,
    userWords: UserWordsReducer,
    auth: AuthReducer,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default store
