import React, { Component } from 'react';

import '../style.scss';

import { 
    SearchBar,
} from 'antd-mobile'


import CardForStrategy from '../../../components/cardForStrategy'

class Strategy extends Component {
    constructor(props){
        super(props)
        this.state = {
            guideList:[],
            cityList:[],
            styleName:"cardItem",
        }
    }
    
    render() {
        //当季小众推荐
        const guideContent = this.props.guideList.slice(0,4).map((value) => (
            <a key={value.scenic} onClick={this.handleCityClick.bind(this,value.scenic)}>
                
                <img src={value.cover+"!621X327"} alt={value.cityName}/>
                <p>{value.cityName}</p>
                <p>{value.desc}</p>
            </a>
        ))
        return (
            <div style={{background:"#f6f6f6",width:'100%', height : 'auto' ,paddingBottom:"18px"}}>
                <SearchBar 
                    placeholder="搜索目的地" 
                    maxLength={8} 
                    styleName="strategy-search" 
                    showCancelButton="false"/>
                <CardForStrategy 
                    title={"- 当季小众推荐 -"}
                    cardClassName={"currentSeason"}
                    isShowHeader={true}
                    data={this.props.guideList}
                    content={guideContent}
                />
                
                <article>
                    {
                        this.state.cityList.map((value,index) => (
                            <div key={index}>
                                <header>
                                    <p>{value.area}</p>
                                    <p>{value.desc}</p>
                                </header>
                                
                                <div>
                                    {
                                        value.city.map((item) => (
                                            <a key={item.id}>
                                                <img src={item.cover+"!412X310"} alt={""}/>
                                                <p>{item.name}</p>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </article>
                
            </div>
        );
    }
    componentDidMount(){
        fetch('/api/guide/citylist')
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
              return {
                cityList:[...prevState.cityList,...result.result.list]
              }
            })
        })
    }
    handleCityClick(el){
        this.props.history.push({
            pathname:'/strategyList',
            state:el
        })
    }
}

export default Strategy;