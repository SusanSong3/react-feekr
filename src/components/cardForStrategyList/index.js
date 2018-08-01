import React, { Component } from 'react';
import './style.scss';

class CardForStrategyList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        // console.log(this.props.className)
        return (
            <div styleName="card">
                <header>{this.props.title}</header>
                <div styleName={this.props.className}>
                    {
                        this.props.content
                    }
                </div>
                <footer><a href="">{this.props.more}</a></footer>
            </div>
        );
    }
    componentDidMount() {
        
    }
}

export default CardForStrategyList;