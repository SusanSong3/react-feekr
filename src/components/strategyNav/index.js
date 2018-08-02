import React, { Component } from 'react';
import './style.scss';
import food from '../../assets/icons/food.svg'
import bed from '../../assets/icons/bed.svg'
import cart from '../../assets/icons/cart.svg'
import scenery from '../../assets/icons/scenery.svg'
class strategyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div styleName="nav">
                <a>
                   <div>
                        <img src={scenery} alt="scenery"/>
                   </div>
                     <span>美景</span>
                </a>
               <a>
                    <div>
                        <img src={food} alt="food"/>
                   </div>
                     <span>美食</span>
               </a>
               <a>
                    <div>
                        <img src={bed} alt="bed"/>
                   </div>
                    <span>美宿</span>
               </a>
                <a>
                    <div>
                        <img src={cart} alt="cart"/>
                   </div>
                    <span>美物</span>
                </a>
                
            </div>
        );
    }
    
}

export default strategyNav;