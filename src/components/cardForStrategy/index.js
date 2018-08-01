import React, { Component } from 'react';
import './style.scss';

class CardForStrategy extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div styleName="cardForStrategy">
                <header style={this.props.isShowHeader ? {display:"block"} : {display:"none"}}>
                    <p>{this.props.title}</p>
                </header>
                <div styleName={this.props.cardClassName}>
                    {
                        this.props.content
                    }
                    
                </div>
            </div>
        );
    }
    
}

export default CardForStrategy;