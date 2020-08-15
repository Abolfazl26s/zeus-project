import React from 'react';
import data from '../data.json';

const Banner = () => {
    return (
        <section id="carousel">
          <div className="carousel slide" data-ride="carousel" id="carousel-1">
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item">
                <div className="jumbotron pulse animated hero carousel-hero">
                  <h1 className="hero-title">{data.sections[0].items[0].title}</h1>
                  <p className="hero-subtitle">
                    {data.sections[0].items[0].subtitle}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="jumbotron pulse animated hero carousel-hero">
                  <h1 className="hero-title">{data.sections[0].items[1].title}</h1>
                  <p className="hero-subtitle">
                    {data.sections[0].items[1].subtitle}
                  </p>
                </div>
              </div>
              <div className="carousel-item active">
                <div className="jumbotron pulse animated hero carousel-hero">
                  <h1 className="hero-title">{data.sections[0].items[2].title}</h1>
                  <p className="hero-subtitle">
                    {data.sections[0].items[2].subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <a
                className="carousel-control-prev"
                href="#carousel-1"
                role="button"
                data-slide="prev"
              >
                <i className="fa fa-chevron-left"></i>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carousel-1"
                role="button"
                data-slide="next"
              >
                <i className="fa fa-chevron-right"></i>
                <span className="sr-only">Next</span>
              </a>
            </div>
            <ol className="carousel-indicators">
              <li data-target="#carousel-1" data-slide-to="0"></li>
              <li data-target="#carousel-1" data-slide-to="1"></li>
              <li
                data-target="#carousel-1"
                data-slide-to="2"
                className="active"
              ></li>
            </ol>
          </div>
        </section>
    );
}

export default Banner;
