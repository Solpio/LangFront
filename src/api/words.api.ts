import { apiRequest } from '../services/request.service'
import { IWordsProps } from '../types/word.interface'

export const getWords = async (params: IWordsProps) => {
  console.log(params)
  return await apiRequest()
    .get('/words', { params: params.query })
    .then((response) => {
      return {
        words: response.data,
      }
    })
}
