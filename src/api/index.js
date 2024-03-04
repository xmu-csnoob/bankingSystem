import { get, post } from './request'

export const apiTransactionHistory = (params) => {
  return get('/transaction/history', params)
}
export const apiTransactionTransfer = (params) => {
  return post('/transaction/transfer', params)
}
