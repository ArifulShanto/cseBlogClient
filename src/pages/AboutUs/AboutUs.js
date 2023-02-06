import React from "react";
import pronabSir from "../../assets/img/pronobSir.jpg";
import shanto from "../../assets/img/shanto.jpg";
import sayem from "../../assets/img/sayem.jpg";
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about">
      <div className="about-up">
        <div className="about-card">
          <img src={pronabSir} alt="" />
          <h2>Pronab Kumar Mondal</h2>
          <span>Supervisor</span>
          <h3>Associate Professor</h3>
          <h4>Dept. of CSE, JKKNIU</h4>
          <a href="#">
            <i className="far fa-envelope-open"></i>
            pronabtheexplorer@yahoo.com
          </a>
          <div className="about-icon">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fas fa-globe"></i>
          </div>
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-card">
          <img src={shanto} alt="" />
          <h2>Ariful Islam Shanto</h2>
          <span>Student</span>
          <h4>Dept. of CSE, JKKNIU</h4>
          <a href="#">
            <i className="far fa-envelope-open"></i>
            arifulislamshanto779@gmail.com
          </a>
          <div className="about-icon">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
        <div className="about-card">
          <img src={sayem} alt="" />
          <h2>Sayem Mohammad Waliullah</h2>
          <span>Student</span>
          <h4>Dept. of CSE, JKKNIU</h4>
          <a href="#">
            <i className="far fa-envelope-open"></i>
            mdsayem@gmail.com
          </a>
          <div className="about-icon">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
