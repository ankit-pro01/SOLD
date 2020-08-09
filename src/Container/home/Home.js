import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import classes from './Home.module.css';
import data from '../../data.json';
import Products from '../Products/Products';

class Home extends Component{
    state = {
        products : data.products
    }

    render(){
        return(
            <div className = {classes.Container}>
                <nav className = {classes.Nav}>
                    <Navbar ></Navbar>
                </nav>
                <main className = {classes.Main}>
                    <div>sort</div>
                    <div className = {classes.content}>
                        <Products products = {this.state.products}></Products>
                            
                        {/* <div className = {classes.sidebar}> Cart Items</div> */}
                    </div>
                   
                </main>
                <footer className = {classes.Footer}>
                    <p>All rights are reserved</p>
                </footer>
            </div>
        )
    }
}

export default Home;