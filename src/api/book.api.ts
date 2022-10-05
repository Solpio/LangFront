import { apiRequest } from '../services/request.service'

export const getBooks = async () => {
  return await apiRequest()
    .get('/books/sections')
    .then((res) => {
      return res.data
    })
}
