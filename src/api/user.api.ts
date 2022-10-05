import { apiRequest } from '../services/request.service'
import { IUser, IUserLogin } from '../types/user.interface'

export const createUser = async (params: IUser) => {
  return await apiRequest()
    .post('/auth/registration', {
      ...params.body,
    })
    .then((res) => {
      return {
        login: res.data,
      }
    })
}

export const login = async (params: IUserLogin) => {
  return await apiRequest()
    .post('/auth/login', {
      ...params.body,
    })
    .then((res) => {
      return {
        login: res.data,
      }
    })
}

export const getMe = async () => {
  return await apiRequest()
    .get('/auth/me')
    .then((res) => {
      return {
        login: res.data,
      }
    })
}
