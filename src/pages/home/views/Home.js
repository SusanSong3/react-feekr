import React, { Component } from 'react';
import { TabBar } from 'antd-mobile';

import '../style.scss'

import { Route } from 'react-router-dom';

import indexIcon from '../../../assets/icons/home.svg'
import vacationIcon from '../../../assets/icons/vacation.svg'
import strategyIcon from '../../../assets/icons/strategy.svg'
import myIcon from '../../../assets/icons/my.svg'
import indexIconLight from '../../../assets/icons/homeLight.svg'
import vacationIconLight from '../../../assets/icons/vacationLight.svg'
import strategyIconLight from '../../../assets/icons/strategyLight.svg'
import myIconLight from '../../../assets/icons/myLight.svg'

import { Ui as Index } from '../../index'
import { Ui as Strategy } from '../../strategy'
import { Ui as My } from '../../my'



class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      hidden:false,
      selectedTab:"indexTab"
    }
  }
  render() {
    // console.log(this.props.location.pathname)
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
      <TabBar
        unselectedTintColor="#333"
        tintColor="#1abc9c"
        barTintColor="#e5e5e5"
        hidden={this.state.hidden}
        tabBarPosition="bottom"
      >
        <TabBar.Item
          title="首页"
          key="index"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(' + indexIcon + ') center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(' + indexIconLight + ') center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'indexTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'indexTab',
            });
            this.props.history.push('/home')
          }}
          data-seed="logId"
        >
          <Route path="/home" component={Index}/>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + vacationIcon + ') center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + vacationIconLight + ') center center /  21px 21px no-repeat' }}
            />
          }
          title="度假"
          key="Vacation"
         
          selected={this.state.selectedTab === 'vacationTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'vacationTab',
            });
            this.props.history.push('/home/vacation')
          }}
          data-seed="logId1"
        >
          <div style={{
            width:'100%',
            height:'100%',
            background:'white',
            textAlign:'center',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
            }}>
            <p style={{
              lineHeight:'30px'
            }}>这里跳转到了一个商城网站</p>
            <p>先空在这里</p>
            <p>待我写完微信小程序</p>
            <p>用"WebView"包起来就ok</p>
          </div>
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + strategyIcon + ') center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(' + strategyIconLight + ') center center /  21px 21px no-repeat' }}
            />
          }
          title="攻略"
          key="Strategy"
          selected={this.state.selectedTab === 'strategyTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'strategyTab',
            });
            this.props.history.push('/home/strategy')
          }}
        >
          <Route path="/home/strategy" component={Strategy}/>
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: myIcon }}
          selectedIcon={{ uri: myIconLight }}
          title="我的"
          key="my"
          selected={this.state.selectedTab === 'myTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'myTab',
            });
            let isSignin = localStorage.getItem('isSignin')
            if(isSignin === "true"){
              this.props.signIn()
              this.props.history.push('/home/my')
            }else {
              this.props.history.push('/signin')
            }
          }}
        >
         <Route path="/home/my" component={My}/>
        </TabBar.Item>
      </TabBar>
    </div>
    );
  }

  componentDidMount(){
    
    // let from = this.props.location.pathname.substr(6)
    // console.log(from)
    // this.setState({
    //   selectedTab: from || 'indexTab'
    // })
  }
}

export default Home;