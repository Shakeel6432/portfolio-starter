import React from "react";
import "./Footer.css";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

import Wave from '../../img/wave.png'

export default function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="f-mail">Shakeel6432@gmail.com</span>
        <div className="f-icons">
          <Insta color="white" size="3rem"/> 
          <Facebook color="white" size="3rem"/> 
          <Github color="white" size="3rem"/> 
        </div>
      </div>
    </div>
  );
}
