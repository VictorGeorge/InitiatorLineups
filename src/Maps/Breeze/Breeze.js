import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js'
import {AppContext} from '../../State/context.js';
import Lineups from '../../Components/Lineups.js';

class Breeze extends Component {
    
    componentDidMount(){
        this.context.updateMap("breeze", this.context.newDetail)
    }

    
        render() {
            return (
                <div>
                <Nav />
                <Lineups />
            </div>
            );
        }
    }
    
    Breeze.contextType = AppContext;
    
    export default Breeze;