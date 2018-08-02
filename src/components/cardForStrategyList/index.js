import React, { Component } from 'react';
import './style.scss';

class CardForStrategyList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div styleName="card">
                <header>{this.props.title}</header>
                <div styleName={this.props.classname}>
                    {
                        this.props.content
                    }
                </div>
                <footer style={this.props.more === "" ? {display:'none'} : {display:'block'} }><a href="">{this.props.more}</a></footer>
            </div>
        );
    }
    componentDidMount() {
        
    }
}

export default CardForStrategyList;