import { GET_THUMBLIST , GET_GUIDELIST } from './actionTypes'

const defaultValue = {
    thumbList:[],
    guideList:[]
}
//轮播图
const getList = (state = defaultValue,action) => {
    if(action.type === GET_THUMBLIST){
        return {
            ...state,
            thumbList : [...action.data]
        }
    }
    if(action.type === GET_GUIDELIST){
        return {
            ...state,
            guideList : [...action.data]
        }
    }
    return state
}
//目的地推荐

export default getList
