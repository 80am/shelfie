import React, { Component } from 'react';
import Product from '../Product/Product'



class Dashboard extends Component {
    constructor(props) {
        super(props)   
    }

    render() {
        var fav = this.props.enteries
        var displayItems = fav.map((info => { 
           return <Product />
            // products={this.props.displayItems} />       <--------- at this point i was trying to pass the info onto products and became stuck
            // productName={info.productName} 
            //           productPrice={info.productPrice} 
            //           image={info.image}
        }) )                                  
        return (
            < p > 
            Dashboard
            {displayItems}
            </p >
        )
    }
}

export default Dashboard

//  key={i}
//                 name={e}
//                 price={e.id}
//                 images={this.props.addtoInventory}


// key={e} item={e} index={index}
            //                         deleteFavorite={this.props.deleteFavorite}
            //                         updateFavorite={this.props.updateFavorite}/>