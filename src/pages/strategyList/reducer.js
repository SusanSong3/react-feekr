import { GETTHEMELIST  } from './actionTypes'

const defaultValue = {
    themeList:[],
}
//轮播图
const getList = (state = defaultValue,action) => {
    if(action.type === GETTHEMELIST){
        return {
            ...state.themeList,
            themeList : [...action.data]
        }
    }
    
    return state
}
//目的地推荐

export default getList
