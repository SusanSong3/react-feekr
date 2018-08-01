import { connect } from 'react-redux'
import { isSignin } from '../actionCreator'

import Home from './Home'

const mapStateToProps = (store) => {
  return {
     isSignin:store.home.isSignin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn(){
      dispatch(isSignin(true))
    },
    signOut(){
      dispatch(isSignin(false))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)