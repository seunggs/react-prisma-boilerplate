import * as R from 'ramda'
import UserQuery from './UserQuery'
import FileQuery from './FileQuery'

const Query = R.mergeAll([
  UserQuery,
  FileQuery,
])

export { Query as default }