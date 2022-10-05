import { IWordsProps } from '../types/word.interface'
import { apiRequest } from '../services/request.service'
import { ISetUserWordParams } from '../types/userWord.interface'

export const createUserWords = async (params: IWordsProps) => {
  return await apiRequest()
    .post('/user/words', {}, { params: params.query })
    .then((res) => {
      return {
        words: res.data,
      }
    })
}

export const getUserWords = async () => {
  return await apiRequest()
    .get('/user/words')
    .then((res) => {
      return {
        words: res.data,
      }
    })
}

export const setWordStatus = async (params: ISetUserWordParams) => {
  return await apiRequest()
    .put(`/user/words/${params.query.id}/${params.query.status}`)
    .then((res) => {
      return {
        word: res.data,
      }
    })
}

// export const getUserWord = async (params: any) => {
//   return await apiRequest()
//     .get(`/user/words/${params.query.id}`)
//     .then((res) => {
//       return { word: res.data }
//     })
// }
