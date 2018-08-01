import { GET_THUMBLIST ,GET_GUIDELIST } from './actionTypes';

const getPlainThumbList = (data) => {
  return {
      type:GET_THUMBLIST,
      data
  }
}

const getAsyncThumbList = () => {
  return (dispatch) => {
    fetch('/api/strategy/slideThumb?code=strategy')
    .then(response => response.json())
    .then(result => {
        dispatch(getPlainThumbList(result.result.slideItem))
    })
  }
}

const getPlainGuideList = (data) => {
  return {
      type:GET_GUIDELIST,
      data
  }
}

const getAsyncGuideList = () => {
  return (dispatch) => {
    fetch('/api/guide/cityrecommend')
      .then(response => response.json())
      .then(result => {
        dispatch(getPlainGuideList(result.result.list))
      })
  }
}
export {
    getPlainThumbList,
    getAsyncThumbList,
    getPlainGuideList,
    getAsyncGuideList
}