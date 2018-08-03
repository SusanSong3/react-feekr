import React, { Component } from 'react'
import './style.scss'

class QRCode extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.data)
        return (
            <div styleName="qrcode">
                <h1>Feekr</h1>
                <p>每天推荐小众特色私藏冷门，人少好玩的旅行地</p>
                <img src="https://res01.b0.upaiyun.com/logo/feekr_copyright.png" className="feekr-right" alt=""/>
                <img src="https://res01.b0.upaiyun.com/logo/qrcode.jpg" alt=""/>
                <p>投稿联系</p>
                <p>mytrip2@feekr.com</p>
            </div>
        );
    }
}

export default QRCode;