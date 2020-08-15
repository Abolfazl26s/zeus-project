import React, { Component } from 'react';

class Picture extends Component {
    render() {
        const {picture}=this.props
        return (
            <div className="col-md-3 col-sm-6 wow animate__backInLeft" data-wow-duration="1s" data-wow-delay="1s">
                    <div className="box1">
                        <img alt={picture.content.title} src={picture.content.image} alt=""/>
                        <h3 className="title">{picture.content.title}</h3>
                        <ul className="icon">
                            <li><a href="/"><i className="fa fa-search"></i></a></li>
                            <li><a href="/"><i className="fa fa-link"></i></a></li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Picture;
