import React, {Fragment} from "react";
import data from '../data.json';
import ModalLogin from "./ModalLogin";
import { Link,animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  return (
    <Fragment>
      <nav
        className="navbar border-bottom navbar-expand-lg fixed-top bg-white clean-navbar">
        <div className="container">
          <a className="navbar-brand logo" href onClick={
            () => scroll.scrollToTop()
          }>
            {data["logoTitle"]}
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="text-light fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav ml-auto rtl text-right">
              <li className="nav-item" role="presentation">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                خانه
              </Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link
                activeClass="active"
                to="service"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                خدمات ما
              </Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link
                activeClass="active"
                to="Gallery"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
              گالری محصولات              </Link>
              </li>
              <li className="nav-item" role="presentation">
              <Link
                activeClass="active"
                to="lastProducts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                نمونه کارها
              </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                  type="button"
                  className="btn text-light p-1"
                  data-toggle="modal"
                  data-target="#LoginModalCenter">
                  ورود
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ModalLogin/>
      </Fragment>);
}
export default NavBar;