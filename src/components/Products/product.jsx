import React, { Component } from 'react';

class product extends Component {
    render() {
        const {product}=this.props
        return (
            <li >
            <a className="image_title" href="/">
              {product.content.title}
            </a>
              <img alt={product.content.title} src={product.content.image} />
            
          </li>
        );
    }
}

export default product;
