import {QRCODE} from './actionTypes'
export const getQRCode = (data) => {
  return {
      type:QRCODE,
      data
  }
}

export const getQRCodeContent = (id) => {
    return (dispatch) => {
        fetch(`/api/share?id=${id}&type=article`)
        .then(response => response.json())
        .then(result => {
            dispatch(getQRCode(result.result))
        })
      }
}
