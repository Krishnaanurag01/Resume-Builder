import React from "react";
import { NavLink } from "react-router-dom";
// import github from '../../static/images/github.svg'
const Footer = () => {
  return (  
  
  <footer className="footer" style={{  width:"100vw", bottom:"0" }} >  
    <div style={{ height : '100%', width:'100%' , display:'flex',flexDirections:'column', justifyContent:'center', alignItems:'center' }} >
{/* 
      <div>
        <img src="" />
      </div> */}

      <p style = {{color:"	#E2DFD2"}} >© Copyright 2022 Anurag Krishna</p>
    </div>
  </footer>

  );
};
export default Footer;
