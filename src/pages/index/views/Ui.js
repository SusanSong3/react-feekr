import { connect } from 'react-redux'

import Index from './Index'

import { getAsyncThumbList , getAsyncGuideList } from '../actionCreator'


const mapStateToProps = (state) => {
  return {
      thumbList : state.index.thumbList,
      guideList : state.index.guideList,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      getThumbList (){
          dispatch(getAsyncThumbList())
      },
      getGuideList (){
        dispatch(getAsyncGuideList())
    }
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Index)