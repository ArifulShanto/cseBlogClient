import React from 'react';
import './header.css';
import cse from '../../assets/img/cse.jpg';


const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">JKKNIU CSE</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img
                className="headerImg"
                src={cse}
                alt=""
            />
        </div>
    );
};

export default Header;