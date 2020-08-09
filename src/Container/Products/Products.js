import React, { Component } from 'react';
import classes from './products.module.css';
import formatCurrency from '../../Components/util/util';

class Products extends Component{

    render(){
        return(
            <div className = {classes.product}>
                {this.props.products.map( i => {
                    return(
                        <div className = {classes.card} key = {i._id}>
                            <img src = {i.image} />
                    <p>{i._id}</p><p>Price : {formatCurrency(i.price)}</p>
                        </div>
                    )
                })}
            </div>
        )
    }        
}

export default Products;