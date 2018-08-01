import {IS_SIGNIN} from './actionTypes'

const defaultValue = {
    isSignin:false
}

export default (state = defaultValue , action ) => {
    if(action.type === IS_SIGNIN){
        return{
            isSignin:action.data
        }
    }
    return state
}
