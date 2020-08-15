import React from 'react';
import data from '../data.json';
import Map from './Map';
import { animateScroll as scroll } from "react-scroll";
const Footer = () => {
    return (
        <footer id="footer" className="section section-grey">
        {" "}
        <div className="container">
          <div className="row dir_rtl">
            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer">
                <div className="footer-logo mb-4">
                  <a className="logo" href onClick={
            () => scroll.scrollToTop()
          }>
                    <img  src={data.logoImg} alt={data.logoTitle} className="img-fluid"/>
                  </a>
                </div>

                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است
                </p>

                <ul className="socialMedia">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100012512077239">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-sm-6 col-xs-6 rounded">
              <Map/>
            </div>

            <div className="col-md-3 col-sm-6 col-xs-6">
              <div className="footer">
                <h3 className="footer-header text-light">به روز باشید</h3>
                <p>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </p>
                <form>
                  <div className="form-group">
                    <input
                      className="input rounded border-0 shadow"
                      placeholder="ادرس ایمیل را وارد کنید"
                    />
                  </div>
                  <button className="btn btn-grad shadow">
                    عضویت در خبرنامه
                  </button>
                </form>
              </div>
            </div>
          </div>

          <hr />

          <p className="text-center">تمامی حقوق این سایت ...</p>
        </div>
      </footer>
    );
}

export default Footer;
