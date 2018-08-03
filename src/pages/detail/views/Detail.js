import React, { Component } from 'react';
import { NavBar, ActionSheet} from 'antd-mobile';

import back from '../../../assets/icons/back.svg'
import collect from '../../../assets/icons/collect.svg'
import share from '../../../assets/icons/share.svg'

import '../style.scss'

import QRCode from '../../../components/qrCode'
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);

if (isIPhone) {
    let wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content : {},
         };
    }
    
    render() {
        this.dataList = [
            { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
            { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
            { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
            { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
            { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
            ].map(obj => ({
            icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
            title: obj.title,
        }));
        // console.log(this.state.content)
        return (
            <div style={{background:"#f6f6f6",width:'100%', height : '6.67rem',overflow:'scroll'}}>
                <NavBar
                key={this.props.location.state}
                mode="light"
                icon={<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(' + back + ') center center /  21px 21px no-repeat' }}
                  />}
                onLeftClick={() => this.props.history.goBack()}
                rightContent={[
                    <div 
                    key="0"
                    style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(' + collect + ') center center /  21px 21px no-repeat' ,
                    marginRight: '15px',}}
                    />,
                    <div 
                    key="1"
                    onClick={this.showShareActionSheet}
                    style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(' + share + ') center center /  21px 21px no-repeat' }}
                    />
                ]}
                />
                <div styleName="article">
                    <header>{this.state.content.title}</header>
                    <p>
                        <img src={this.state.content.authAvatar} alt={this.state.content.authorId}/>
                        <span>{this.state.content.nickname}</span>
                        <span>总阅读数 {this.state.content.viewCount}</span>
                    </p>
                    <div
                    dangerouslySetInnerHTML={{__html:this.state.content.content}}
                    />
                    <footer>
                        <QRCode 
                        data={this.props.qrCode}
                        />
                    </footer>
                </div>


            </div>
        );
    }
    componentDidMount() {
        let id = this.props.location.state
        fetch(`/api/article/detail?id=${id}`)
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
                return {
                    content:{
                        ...prevState.content,
                        ...result.result.content
                    }
                }
            })
        })
    }
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            setTimeout(resolve, 100);
          });
        });
      }
}

export default Detail;