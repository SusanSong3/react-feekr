import React, { Component } from 'react';

import '../style.scss';

import { 
    Carousel ,
    SearchBar,
    Grid
} from 'antd-mobile'

import strategyIcon from '../../../assets/icons/strategyIcon.png'
import vacationIcon from '../../../assets/icons/vacationIcon.png'
import playIcon from '../../../assets/icons/playIcon.png'
import itemIcon from '../../../assets/icons/itemIcon.png'
import laboratoryIcon from '../../../assets/icons/laboratoryIcon.png'

import CardForIndex from '../../../components/cardForIndex'

class Index extends Component {
    constructor(props){
        super(props)
        this.state = {
            imgHeight:225,
            newsData:[],
            productsData:[],
            aceData:[],
            editorData:[],
            grid:[
                {
                    icon:strategyIcon,
                    text:'攻略'
                },
                {
                    icon:vacationIcon,
                    text:'度假'
                },
                {
                    icon:playIcon,
                    text:'玩乐'
                },
                {
                    icon:itemIcon,
                    text:'美物'
                },
                {
                    icon:laboratoryIcon,
                    text:'研究所'
                }]
        }
    }
    
    render() {
        //最新旅行资讯
        const newsSection = this.state.newsData.map(value => (
            <a key={value.id}  onClick={this.handleNewsClick.bind(this,value.id)}>
                <img src={value.cover+'!300X300'} alt=""/>
                <div>
                    <p>{value.title}</p>
                    <p>
                        <span>{value.viewCount}人阅读</span>
                        <span>/</span>
                        <span>{value.time}</span>
                    </p>
                </div>
            </a>
        ))
        //当季特惠
        const productSection = this.state.productsData.map(value => (
            <div key={value.categoryId}>
                <p>
                    <span>{value.categoryTitle}</span><i></i><a>更多</a>
                </p>
                <div>
                    {value.list.map(item => (
                        <a key={item.productId}>
                            <img src={item.productCover+'!200X200'} alt=""/>
                            <p>{item.productName}</p>
                            <p><span>{item.productArea}</span><span>-</span><span>{item.productCity}</span></p>
                            <p>¥{item.productPrice}起</p>
                        </a>
                    ))}
                </div>
            </div>))
        // 目的地推荐
        const guideSection = this.props.guideList.slice(0,4).map((value) => (
            <a key={value.scenic}>
                <div>
                    <img src={value.cover+'!621X327'} alt=""/>
                    <span>{value.cityName}</span>
                </div>
                <p>{value.fxb}位当地飞小编推荐</p>
            </a>
        ))

        // 旅行达人教你玩
        const aceSection = this.state.aceData.map((value,index) => (
            <div key={index}>
                <a>
                    <img src={value.cover+"!500X700"} alt={value.name}/>
                    <div>
                        <p>{value.name}</p>
                        <p>{value.desc}</p>
                        <p>直播时间：{value.liveTime}</p>
                        <p>{value.topic}</p>
                    </div>
                </a>
            </div>
        ))

        //编辑精选
        const editorSection = this.state.editorData.map((value,index) => (
            <div key={index}>
                <p>
                    <span>{value.column}</span><i></i><a>更多</a>
                </p>
                {
                    value.article.map((item)=>(
                        <a key={item.id}>
                            <p>{item.title}</p>
                            <div>
                                <img src={item.cover+"!600X400"} alt={item.title}/>
                                <div>
                                    <p>{item.desc}</p>
                                    <p>
                                        {
                                            item.tag.map((tagItem,index)=> (
                                                <span key={index}>{tagItem}</span>
                                            ))
                                            
                                        }
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </div>
        ))

        return (
            <div>
                <Carousel
                autoplay={true}
                infinite={true}
                >
                {this.props.thumbList.map(val => (
                    <a
                    key={val}
                    href={val.url}
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={val.thumb}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
                <SearchBar placeholder="搜索目的地/攻略/旅行资讯" maxLength={8} disabled="false" styleName="am-search"/>
                <Grid data={this.state.grid} activeStyle={false} hasLine={false} columnNum={5} styleName="am-grid"
                renderItem={dataItem => (
                    <div style={{marginTop:'-10px'}}>
                      <img src={dataItem.icon} style={{ width: '40px', height: '40px' }} alt="" />
                      <div style={{ color: '#888', fontSize: '12px', marginTop:'2px'}}>
                        <span>{dataItem.text}</span>
                      </div>
                    </div>
                  )}
                />
                <div style={{background:"#f6f6f6",width:'100%', height : 'auto'}}>
                    <CardForIndex 
                    title={"最新旅行资讯"}
                    subtitle={"给你最新的旅行热点"}
                    isShowFooter={true} 
                    bottomTitle={"更多旅行资讯"}
                    data={this.state.newsData}
                    itemClassName={"news"}
                    sectionContent={newsSection}
                    />
                    <CardForIndex 
                    title={"当季特惠"}
                    subtitle={"本季度最优惠的出游商品"}
                    isShowFooter={false} 
                    bottomTitle={""}
                    data={this.state.productsData}
                    itemClassName={"product"}
                    sectionContent={productSection}
                    />
                    <CardForIndex 
                    title={"目的地推荐"}
                    subtitle={"开启城市深度游攻略"}
                    isShowFooter={true} 
                    bottomTitle={"更多目的地推荐"}
                    data={this.props.guideList}
                    itemClassName={"guide"}
                    sectionContent={guideSection}
                    />
                    <CardForIndex 
                    title={"旅行达人教你玩"}
                    subtitle={"每周一期，教你好好生活"}
                    isShowFooter={true} 
                    bottomTitle={"更多达人直播"}
                    data={this.state.aceData}
                    itemClassName={"ace"}
                    sectionContent={aceSection}
                    />
                    <CardForIndex 
                    title={"编辑精选"}
                    subtitle={"推荐最具小众特色的旅行体验"}
                    isShowFooter={true} 
                    bottomTitle={"更多栏目推荐"}
                    data={this.state.editorData}
                    itemClassName={"editor"}
                    sectionContent={editorSection}
                    />
                </div>
            </div>
        );
    }

    componentDidMount(){
        
        this.props.getThumbList()
        this.props.getGuideList()
        
        //最新旅行资讯
        fetch('/api/news/lists?page=1&count=3')
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
              return {
                  newsData:[...prevState,...result.result.list]
              }
            })
        })
        //当季特惠
        fetch('/api/product/module?moduleId=1')
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
              return {
                productsData:[...prevState,...result.result.product]
              }
            })
        })

        // 旅行达人
        fetch('/api/ace/lists?page=1&count=3')
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
              return {
                aceData:[...prevState,...result.result.list]
              }
            })
        })
        // 编辑精选
        fetch('/api/editor/selected')
        .then(response => response.json())
        .then(result => {
            this.setState((prevState) => {
              return {
                editorData:[...prevState,...result.result.list]
              }
            })
        })
    }
    handleNewsClick(el){
        this.props.history.push({
            pathname:'/detail:'+el,
            state:el,
        })
    }
    //lZRrnA==
    //lZRrnA%3D%3D
}

export default Index;