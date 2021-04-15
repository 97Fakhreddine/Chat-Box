import React, { useEffect } from "react";
import logging from "../config/logging";
// import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
import "../../style/HomePage.css";
// import { Button } from "@material-ui/core";

const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    logging.info("Loading application.");
  }, []);

  return (
    <div>
      {/* <Spinner hello={null} /> */}
      <div>
        <div className="wrapper">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navigation"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand text-uppercase">
                  ChatBox{" "}
                </Link>
              </div>

              <div className="collapse navbar-collapse" id="navigation">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign in</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-md-offset-1">
                  <div className="content">
                    <div className="pull-middle">
                      <h1 className="page-header">
                        Implemente React and Typescript
                      </h1>
                      <h2 className="lead">
                        My lovely combination:{""}
                        <ul>
                          <div>React</div>
                          <div>Typescript</div>
                          <div>Nest Js</div>
                        </ul>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-md-offset-1 text-center mt-100 mb-100">
                  <div className="phone">
                    <img
                      className="img-responsive img-rounded"
                      src="https://repository-images.githubusercontent.com/135786093/b56ad700-6d50-11e9-9775-9f64c1e1414e"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <footer className="footer text-center">
            <div className="container">
              <small>
                © Copyright 2021. Crafted with love by{" "}
                <a href="https://github.com/97Fakhreddine">@97Fakhreddine</a>
              </small>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
