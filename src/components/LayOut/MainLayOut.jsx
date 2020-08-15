import React,{Fragment} from "react";
import NavBar from "../navbar/NavBar";
import Banner from "../banner/Banner";
import Search from "../search/Search";
import Footer from "../footer/footer";


const MainLayOut = props => {
  return (
    <Fragment >
      <div id="home">
      <NavBar/>
      <Banner/>
      <Search/>

      <main className="page landing-page">
        {props.children}
      </main>

      <Footer/>
      </div>
    </Fragment>
  );
};

export default MainLayOut;
