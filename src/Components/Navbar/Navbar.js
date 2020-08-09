import React, { Component } from 'react';
import { logo } from '../logo/logo';
import classes from './Navbar.module.css';

class Navbar extends Component{
    render(){
        return(
            <nav className = {classes.nav}>
                <div>
                    <logo></logo>
                </div>
                <div>
                    <button>login</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;