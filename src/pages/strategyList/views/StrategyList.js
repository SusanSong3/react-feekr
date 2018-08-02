import React, { Component } from 'react';
// import { NavBar, Icon ,Button} from 'antd-mobile';

import '../style.scss'
import StrategyNav from '../../../components/strategyNav'
import CardForStrategyList from '../../../components/cardForStrategyList'

class StrategyList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cityInfo:{},
            themeList:[],
            routesList:[],
            articleList:[],
            shopList:[],
            nearbyList:[]
         };
    }
    render() {
        //主题推荐
        const theme = this.props.themeList.map((value) => (
            <a key={value.id}>
                <figure>
                    <img src={value.cover+"!640X270"} alt={value.title}/>
                </figure>
                <figcaption>
                    <p>{value.title}</p>
                    <h5>{value.recommendCount}大推荐</h5>
                </figcaption>
            </a>
        ))
        // 路线推荐
        const routes = this.state.routesList.map(value => (
            <a key={value.id}>
                <div>
                    { 
                        value.cover.map((item,index) => (
                            <img src={item+"!200X200"} alt={index} key={index}/>
                        ))
                    }
                </div>
                <p>{value.title}</p>
                <p>路线包括：{
                    value.scenic.map((scenicItem,i) => (
                        <span key={i}>
                            <span>{scenicItem}</span>
                            <i>－</i>
                        </span>
                    ))
                }
                </p>
            </a>
        ))
        // 私藏资讯
        const article = this.state.articleList.map((value) => (
            <a key={value.id}>
                <figure>
                    <img src={value.cover+"!600X400"} alt={value.id}/>
                </figure>
                <figcaption>
                    {value.title}
                </figcaption>
            </a>
        ))
        // 玩乐度假
        const shop = this.state.shopList.map(value => (
            <a key={value.productId}>
                <figure>
                    <img src={value.cover+"!640X360"} alt={value.id}/>
                </figure>
                <figcaption>
                    <p>{value.title}</p>
                    <h5>{value.area} － {value.site}</h5>
                    <h6>¥{value.price}起</h6>
                </figcaption>
            </a>
        ))
        // 周边城市
        const nearby = this.state.nearbyList.map(value => (
            <a key={value.id}>
                <figure>
                    <img src={value.cover+"!300X225"} alt={value.id}/>
                </figure>
                <figcaption>
                    <p>{value.name}</p>
                    <h5>距离 {value.distance} 公里</h5>
                </figcaption>
            </a>
        ))
        return (
            <div style={{background:"#f6f6f6",width:'100%', height : '6.67rem' ,paddingBottom:"18px",overflow:'scroll'}}>
                <div styleName="top">
                    <img src={this.state.cityInfo.cover+"!640X376"} alt=""/>
                    <div>
                        <p>{this.state.cityInfo.cityName}</p>
                        <p>{this.state.cityInfo.fxbCount}位飞小编你为你推荐</p>
                    </div>
                </div>
                <StrategyNav/>
                <CardForStrategyList
                title="－ 主题推荐 －"
                more="更多主题推荐"
                data={this.state.themeList}
                classname="themeSection"
                content={theme}
                />
                <CardForStrategyList
                title="－ 路线推荐 －"
                more="更多路线"
                data={this.state.routesList}
                classname="routesSection"
                content={routes}
                />
                <CardForStrategyList
                title="－ 私藏资讯 －"
                more="更多私藏资讯"
                data={this.state.articleList}
                classname="article"
                content={article}
                />
                <CardForStrategyList
                title="－ 玩乐度假 －"
                more="更多玩乐度假"
                data={this.state.shopList}
                classname="shopSection"
                content={shop}
                />
                <CardForStrategyList
                title="－ 周边城市 －"
                more=""
                data={this.state.nearbyList}
                classname="nearby"
                content={nearby}
                />
            </div>
        );
    }
    componentDidMount(){
        //城市的概括信息
        let id = this.props.location.state
        fetch('/api/guide/detail?id='+id)
        .then(response => response.json())
        .then((result) => {
          this.setState((prevState) => {
            return {
                cityInfo:{
                    ...prevState.cityInfo,
                    ...result.result
                }
            }
          })
        })
        //主题推荐
        this.props.getThemeList(id)
        // 路线推荐
        fetch(`/api/guide/pathlist?id=${id}&count=2&recommend=1`)
        .then(response => response.json())
        .then(result => {
          this.setState((prevState) => {
            return {
                routesList:[
                    ...prevState.routesList,
                    ...result.result.list
                ]
            }
          })
        })
        // 更多资讯
        fetch(`/api/guide/articlelist?id=${id}&count=2&recommend=1`)
        .then(response => response.json())
        .then(result => {
          this.setState((prevState) => {
            return {
                articleList:[
                    ...prevState.articleList,
                    ...result.result.list
                ]
            }
          })
        })
        // 玩乐度假
        fetch(`/api/guide/shoplist?id=${id}&count=2&recommend=1`)
        .then(response => response.json())
        .then(result => {
          this.setState((prevState) => {
            return {
                shopList:[
                    ...prevState.shopList,
                    ...result.result.list
                ]
            }
          })
        })
        // 周边城市
        fetch(`/api/guide/nearby?cityId=${id}`)
        .then(response => response.json())
        .then(result => {
          this.setState((prevState) => {
            return {
                nearbyList:[
                    ...prevState.nearbyList,
                    ...result.result.list
                ]
            }
          })
        })
    }
}

export default StrategyList;