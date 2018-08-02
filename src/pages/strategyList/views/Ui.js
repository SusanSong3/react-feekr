import { connect } from 'react-redux'

import StrategyList from './StrategyList'

import {  getAsyncThemeList } from '../actionCreator'


const mapStateToProps = (store) => {
  return {
    themeList:store.strategyList.themeList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getThemeList(id){
      dispatch(getAsyncThemeList(id))
    }
    
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(StrategyList)