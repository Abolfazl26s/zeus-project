import React, { Component } from 'react';
import WOW from 'wowjs';
import data from '../data.json';
import Product from './product';

 class Products extends Component {
  componentDidMount(){
    new WOW.WOW().init()
  }
   render() {
     return (
      <div id="lastProducts" className="col-12 bg-dark last-work">
      <h1 className="col-lg-2 wow animate__tada" data-wow-duration="2s" data-wow-iteration="2">{data.sections[2].title}</h1>
      <div className="accordian col-lg-10">
        <ul>
          {
            data.sections[2].items.map(p=>{
              return(
                <Product product={p}/>
              )
            })
          }
        </ul>
      </div>
    </div>

     );
   }
 }
 
 export default Products;
 
