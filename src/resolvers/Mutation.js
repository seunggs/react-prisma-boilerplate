import * as R from 'ramda'
import UserMutation from './UserMutation'
import FileMutation from './FileMutation'

const Mutation = R.mergeAll([
  UserMutation,
  FileMutation,
])

export { Mutation as default }