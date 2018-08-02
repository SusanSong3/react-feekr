import {QRCODE} from './actionTypes'
const defaultValue = {
    qrcode:{}
}
//轮播图
const getList = (state = defaultValue,action) => {
    if(action.type === QRCODE){
        return {
            ...state.qrcode,
            qrcode : action.data
        }
    }
    
    return state
}
//目的地推荐

export default getList
