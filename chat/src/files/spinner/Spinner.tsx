import React, { FC } from "react";
import "./spinner.css";

/**
 * @type {Props}
 * the props should be null and you should not pass any type of data to this component
 * you should not worry about it, just use it when you will be waitting for retreiving data.
 */

interface Props {
  hello: null;
}
const Spinner: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="loader">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="lading"></div>
        </div>
      </div>
    </div>
  );
};
export default Spinner;
