import React, { Component } from 'react';
import { Button} from 'antd-mobile';

import '../style.scss'

import collection from '../../../assets/icons/collection.svg'
import feedback from '../../../assets/icons/feedback.svg'
import message from '../../../assets/icons/message.svg'
import more from '../../../assets/icons/more.svg'
import setting from '../../../assets/icons/setting.svg'

class My extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userInfo:{}
         };
    }
    render() {
        const handleESCClick = this.handleESCClick.bind(this)
        return (
            <div styleName="my">
                <header styleName="myHeader">我的</header>
                <div>
                    <a>
                        <div>
                            <img src={"https://photo02.b0.upaiyun.com"+this.state.userInfo.avatarUrl+"!180X180"} alt=""/>
                        </div>
                        <span>{this.state.userInfo.nickname}</span>
                        <span style={{
                            background: 'url(' + more + ') center center /  18px 18px no-repeat' 
                        }}></span>
                    </a>
                    <div styleName="info">
                        <a>
                            <span style={{
                                background: 'url(' + message + ') center right /  18px 18px no-repeat' 
                            }}></span>
                           <span> 消息</span>
                           <span style={{
                                background: 'url(' + more + ') center center /  18px 18px no-repeat' 
                            }}></span>
                        </a>
                        <a>
                            <span style={{
                                background: 'url(' + collection + ') center right /  18px 18px no-repeat' 
                            }}></span>
                           <span> 收藏</span>
                           <span style={{
                                background: 'url(' + more + ') center center /  18px 18px no-repeat' 
                            }}></span>
                        </a>
                    </div>
                    <div styleName="info">
                        <a>
                            <span style={{
                                background: 'url(' + setting + ') center right /  18px 18px no-repeat' 
                            }}></span>
                            <span>设置</span>
                            <span style={{
                                background: 'url(' + more + ') center center /  18px 18px no-repeat' 
                            }}></span>
                        </a>
                        <a>
                            <span style={{
                                background: 'url(' + feedback + ') center right /  18px 18px no-repeat' 
                            }}></span>
                            <span>反馈</span>
                            <span style={{
                                background: 'url(' + more + ') center center /  18px 18px no-repeat' 
                            }}></span>
                        </a>
                    </div>
                </div>
                <Button onClick={handleESCClick}>
                    退出
                </Button>
            </div>
        );
    }
    handleESCClick(){
        this.props.signOut()
        this.props.history.push('/signin')
        localStorage.removeItem('isSignin')
    }
    componentDidMount(){
        //e2d11928d42316bc1b21c8febe97ce11c34cb143~64623
        fetch("/api/user/home?authUid=e2d11928d42316bc1b21c8febe97ce11c34cb143~64623",{
            authUid:"e2d11928d42316bc1b21c8febe97ce11c34cb143~64623"
        }).then(response => response.json())
        .then((result) => {
          this.setState((prevState) =>{
              return {
                userInfo:{
                    ...prevState.userInfo,
                    ...result.result.user
                }
              }
          })
        })
    }
}

export default My;