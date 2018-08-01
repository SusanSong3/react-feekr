import { connect } from 'react-redux'
import { isSignin } from '../actionCreator'

import My from './My'
// import { getAsyncThumbList , getAsyncGuideList } from '../actionCreator'


const mapStateToProps = (store) => {
  return {
    isSignin:store.home.isSignin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut(){
      dispatch(isSignin(false))
    },
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(My)