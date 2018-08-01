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
         };
    }
    render() {
        //主题推荐
        const theme = this.state.themeList.map((value) => (
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
                title="- 主题推荐 -"
                more="更多主题推荐"
                data={this.state.themeList}
                className="themeSection"
                content={theme}
                />
                <CardForStrategyList
                title="- 路线推荐 -"
                more="更多路线"
                data={this.state.routesList}
                className="routesSection"
                content={routes}
                />
                <CardForStrategyList
                title="- 私藏资讯 -"
                more="更多私藏资讯"
                data={this.state.articleList}
                className="article"
                content={article}
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
        fetch(`/api/guide/themelist?id=${id}&count=3&recommend=1`)
        .then(response => response.json())
        .then(result => {
          this.setState((prevState) => {
            return {
                themeList:[
                    ...prevState.themeList,
                    ...result.result.list
                ]
            }
          })
        })
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
    }
}

export default StrategyList;