import { connect } from 'react-redux'
import { isSignin } from '../actionCreator'

import Signin from './Signin'
const mapStateToProps = (store) => {
  return {
     user : store.signin.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(Signin)