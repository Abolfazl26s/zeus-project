import React from 'react';
import data from '../data.json'
import Card from './Card';

const Service = () => {
    return (
        <div className="container-fluid service mt-5" id="service">
          <h1 className="serviceTitle text-dark rounded">
            {data.sections[1].title}
          </h1>
          <div className="Intro-services container rtl">
            {
              data.sections[1].items.map((echCard) =>{
                return(
                  <Card card={echCard}/>
                )
              })
            }
          </div>
        </div>
    );
}

export default Service;
