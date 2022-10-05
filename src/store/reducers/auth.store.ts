import {
  createAsyncThunk,
  createSlice,
  SerializedError,
} from '@reduxjs/toolkit'
import { createUser, getMe, login } from '../../api/user.api'
import { IUser, IUserLogin } from '../../types/user.interface'
import { IAuthInterface } from '../../types/auth.interface'
import { AxiosError } from 'axios'

interface IRegErorr {
  message: string
}

interface IValidationErorr {
  location: string
  msg: string
  param: string
  value: string
}

interface IAuth {
  login: IAuthInterface
  errors: Array<IValidationErorr> | IRegErorr | SerializedError
  status: 'loading' | 'fulfilled' | 'rejected'
}

const initialState: IAuth = {
  login: {
    username: '',
    token: window.localStorage.getItem('token') || '',
    updatedAt: '',
    email: '',
    createdAt: '',
  },
  errors: {
    message: '',
  },
  status: 'loading',
}

interface IErorr {
  message: Array<IValidationErorr> | IRegErorr | SerializedError
}

export const createUserAsync = createAsyncThunk<
  IAuthInterface,
  IUser,
  {
    rejectValue: IErorr
  }
>('registration', async (params, { rejectWithValue }) => {
  try {
    const result = await createUser(params)
    return result.login
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return rejectWithValue({ message: error.response.data })
      }
    }
  }
})

// export const loginAsync = createAsyncThunk(
//   'login',
//   async (params: IUserLogin) => {
//     return await login(params)
//   }
// )

export const loginAsync = createAsyncThunk<
  IAuthInterface,
  IUserLogin,
  {
    rejectValue: IErorr
  }
>('login', async (params, { rejectWithValue }) => {
  try {
    const result = await login(params)
    return result.login
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        return rejectWithValue({ message: error.response.data })
      }
    }
  }
})

export const getMeAsync = createAsyncThunk('getMe', async () => {
  return await getMe()
})

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.login = {
        username: '',
        token: '',
        updatedAt: '',
        email: '',
        createdAt: '',
      }
      window.localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => [
    builder.addCase(createUserAsync.pending, (state) => {
      state.status = 'loading'
      state.errors = {}
    }),
    builder.addCase(createUserAsync.rejected, (state, action) => {
      state.status = 'rejected'
      if (action.payload) {
        state.errors = action.payload.message
      } else {
        state.errors = action.error
      }
    }),
    builder.addCase(createUserAsync.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.login = action.payload
    }),
    builder.addCase(loginAsync.pending, (state) => {
      state.status = 'loading'
    }),
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.status = 'rejected'
      if (action.payload) {
        state.errors = action.payload.message
      } else {
        state.errors = action.error
      }
    }),
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.login = action.payload
    }),
    builder.addCase(getMeAsync.pending, (state) => {
      state.status = 'loading'
    }),
    builder.addCase(getMeAsync.rejected, (state) => {
      state.status = 'rejected'
    }),
    builder.addCase(getMeAsync.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.login = action.payload.login
    }),
  ],
})
export const { logout } = userSlice.actions
export default userSlice.reducer
