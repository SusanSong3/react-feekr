import { connect } from 'react-redux'

import Strategy from './Strategy'

// import { getAsyncThumbList , getAsyncGuideList } from '../actionCreator'


const mapStateToProps = (state) => {
  return {
    guideList:state.index.guideList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(Strategy)