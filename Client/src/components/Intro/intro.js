import React from "react";
import { Link } from "react-router-dom";
import img from "../../splash-06.png";
import "./intro.scss";

class intro extends React.Component {
  render() {
    return (
      <div className="screen">
        <Link to="/race">
          <img
            className="background"
            src={img}
            alt="red background with black car"
          ></img>
        </Link>
      </div>
    );
  }
}

export default intro;
