import { combineReducers } from 'redux';
import { reducer as home } from '../pages/home'
import { reducer as index } from '../pages/index'
import { reducer as strategy } from '../pages/strategy'
import { reducer as signin } from '../pages/signin'

export default combineReducers({
    home,
    index,
    strategy,
    signin
})