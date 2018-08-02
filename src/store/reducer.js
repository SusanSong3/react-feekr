import { combineReducers } from 'redux';
import { reducer as home } from '../pages/home'
import { reducer as index } from '../pages/index'
import { reducer as strategy } from '../pages/strategy'
import { reducer as strategyList } from '../pages/strategyList'
import { reducer as signin } from '../pages/signin'
import { reducer as detail } from '../pages/detail'

export default combineReducers({
    home,
    index,
    strategy,
    signin,
    strategyList,
    detail
})