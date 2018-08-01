import React, { Component } from 'react';
// import { createForm } from 'rc-form';
import { Route } from 'react-router-dom';

import Signup from '../../signup'
import '../style.scss'

import {
    Button,
    WingBlank,
} from 'antd-mobile'


class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        const handleSignin = this.handleSignin.bind(this)
        return (
            <div styleName="signIn">
                <p>Feekr</p>
                <div>
                    <form >
                        <WingBlank>
                            <div>
                                <input type="text" placeholder="请输入邮箱或手机号" id="user"/>
                            </div>
                            <div>
                                <input type="password" placeholder="请输入密码" id="password"/>
                            </div>
                            <div>
                                <Button 
                                style={{color:"#1ABC9C",fontSize:".12rem",marginTop:'50'}}
                                onClick={handleSignin}
                                >登录</Button>
                            </div>
                        </WingBlank>
                    </form>
                    <WingBlank>
                        <p
                        onClick={() => {
                            this.props.history.push('./signup')
                        }}
                        >快速注册</p>
                        <Route path='/signup' component={Signup}/>
                    </WingBlank>
                    
                </div>
            </div>
        );
    }
    handleSignin(){
        let user = document.querySelector("#user").value
        let password = document.querySelector("#password").value
        if (this.props.user.username === user && this.props.user.password === password) {
            localStorage.setItem('isSignin','true')
            this.props.signIn()
            this.props.history.push('/home/my')
        } else {
            alert('请注册')
        }
    }
}

export default Signin;