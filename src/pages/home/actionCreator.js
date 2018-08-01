import { IS_SIGNIN } from './actionTypes'

export const isSignin = (data) => {
  return {
      type:IS_SIGNIN,
      data
  }
}


