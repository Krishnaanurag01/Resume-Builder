import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../../static/images/logo.png";
import { isLoaded, isEmpty } from "react-redux-firebase";
import * as authActions from "../../Redux/actions/authActions";

function LoggesOut(props) {
  return (
    <ul>
      <li className="signup ">
        <NavLink className=" btnv-1" to="/register">
          Register
        </NavLink>
      </li>
      <li className="signin">
        <NavLink className="btnv-3" to="/login">
          Sign In
        </NavLink>
      </li>
    </ul>
  );
}

const Header = (props) => {
  const auth = props.auth;
  const handleLogOut = () => {
    props.signOut();
    //  console.log('The user will sign out');
  };

  const [menuLoading,setmenuLoading] = useState(false) ;

  const menuLoad = () =>{ 
    // setmenuLoading(!menuLoading)

    document.getElementById("main-screen-id").classList.toggle("menu-screen-hide")

    document.getElementById("main-screen-id").classList.toggle("menu-screen")
    
  }

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="holder-logo">
          <img className="logo" src={logo}></img>
        </a>

        <div className="sm-menu" id="sm-menu-main" onClick={menuLoad} >
          <div className="white-arrow"> </div>
          <div className="white-arrow"> </div>
        </div>

        <div className="menu-screen-hide" id="main-screen-id"   >
          <li>
            <NavLink className="btn-nvt-gm" style={{color:"white"}}  to="/resume-templates">
              Resume
            </NavLink>
          </li>
          <li className="holder-pricing">
            <NavLink className="btn-nvt-gm" style={{color:"white"}} to="/about-us">
              About Us
            </NavLink>
          </li>


          {isLoaded(auth) && !isEmpty(auth) ?
          <li className="signin email-off">
                  <NavLink className="" style={{color:"white"}} to="/">
                   {auth.email}
                  </NavLink>
          </li> : <li className="signup ">
        <NavLink className="" style={{color:"white"}} to="/register">
          Register
        </NavLink>
      </li>  }

          {isLoaded(auth) && !isEmpty(auth) ? (
            
                <li className="signin">
                  <p className="" style={{color:'white',marginTop:'4rem'}} onClick={handleLogOut}>
                    SignOut
                  </p>
                </li>
          ) : (
            <li className="signin">
        <NavLink className="btnv" to="/login">
          Sign In
        </NavLink>
      </li>
          )}


        </div>

        <div className="header-links full-height">
          {isLoaded(auth) && !isEmpty(auth) ? (
            <>
              <ul>
                <li className="signin ">
                  <NavLink className="  " to="/">
                    Logged in as {auth.email}
                  </NavLink>
                </li>
                <li className="signin">
                  <button className="btnv-3"  onClick={handleLogOut}>
                    Signout
                  </button>
                </li>
              </ul>
            </>
          ) : (
            <LoggesOut></LoggesOut>
          )}

          <ul id="nav-mid">
            <li>
              <NavLink className="btn-nvt-gm" to="/resume-templates">
                Resume Templates
              </NavLink>
            </li>
            <li className="holder-pricing">
              <NavLink className="btn-nvt-gm" to="/about-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(authActions.signout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
