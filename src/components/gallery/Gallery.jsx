import React, { Component } from 'react';
import WOW from 'wowjs';
import data from '../data.json'
import Picture from './Picture';

class Gallery extends Component {
    componentDidMount(){
        new WOW.WOW().init()
      }

    render() {
        return (
            <div id="Gallery">
                <div className="container-fluid mb-5 p-5 products rounded">
        <h1 className="text-center text-dark">{data.sections[3].title}</h1>
                     
            <div className="row mt-40">
               {
                   data.sections[3].items.map(pic =>{
                       return(
                           <Picture picture={pic}/>
                       )
                   })
               }
            </div>
        </div>
            </div>
        );
    }
}

export default Gallery;

