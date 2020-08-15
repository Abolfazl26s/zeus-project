import React, { Component } from 'react';

class Card extends Component {
    render() {
        const {card}=this.props;
        return (
            <div className="box">
      <div className="content">
        <h2>{card.title}</h2>
        <p>{card.content}</p>
      </div>
    </div>
        );
    }
}

export default Card;
