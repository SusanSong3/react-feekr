import React, { Component } from 'react';

// import '../../style/usage/core/reset.scss';

import './style.scss';

class CardForIndex extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        return (
            <div styleName="card">
                <header>
                    <i></i>
                    <span>{this.props.title}</span>
                    <b>{this.props.subtitle}</b>
                </header>
                <section styleName={this.props.itemClassName}>
                    {
                       this.props.sectionContent
                    }      
                </section>
                <footer style={ this.props.isShowFooter ? {display:"block"} : {display:"none"}}>
                    <a>{this.props.bottomTitle}</a>
                </footer>
            </div>
        );
    }
    componentDidMount(){
        // console.log(this.props.data)
    }
}

export default CardForIndex;