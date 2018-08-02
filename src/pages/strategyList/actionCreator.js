import { GETTHEMELIST } from './actionTypes'

export const getPlainThemeList = (data) => {
  return {
      type:GETTHEMELIST,
      data
  }
}

export const getAsyncThemeList = (id) => {
    return (dispatch) => {
        fetch(`/api/guide/themelist?id=${id}&count=3&recommend=1`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            dispatch(getPlainThemeList(result.result.list))
        })
      }
}
