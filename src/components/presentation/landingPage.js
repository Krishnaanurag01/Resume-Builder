import React from "react";
import logo from "../../static/images/resume.jpg";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from "react-redux-firebase";


const Lp = ({auth}) => {
  return (
    <>
    <div className="container  lp-page center">
      <div className="section">
        <div className="text-cont" >
          <h1>Create a resume that stands out</h1>
          <p>
            Create a Resume that perfectally describes your skills and match job
            profile.
          </p>
          <br></br>
          <div> 
            {/* sending to login page if not signed up else send to getting started page */}
            <NavLink to={ isLoaded(auth) && !isEmpty(auth) ? "/getting-started" : "/login"} className="btn hvr-float-shadow">
              <span style={{padding:"3rem"}}>Get Started for Free</span>
            </NavLink>
          </div>
        </div>
        <div className="img-cont">
          <img src={logo} className="lp-resume" alt="logo" />
        </div>
      </div>
    </div>
    <footer className="footer-lp" style={{  width:"100vw", bottom:"0" }} >  
    <div style={{ height : '100%', width:'100%' , display:'flex',flexDirections:'column', justifyContent:'center', alignItems:'center' }} >
{/* 
      <div>
        <img src="" />
      </div> */}

      <p style = {{color:"	#E2DFD2"}} >© Copyright 2022 Anurag Krishna</p>
    </div>
        </footer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    auth : state.firebase.auth
  }
}

export default connect(mapStateToProps)(Lp);
