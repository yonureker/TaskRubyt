import React from 'react';
import { Link } from 'react-router-dom';


class SplashHero extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div className="splash-hero">
        <div className="splash-hero-container">
          <div className="splash-hero-slogan">
            <p>The convenient & affordable way to get things done around the home.</p>
          </div>
          
          <div className="splash-hero-sub-slogan">
            <p>Choose from over 140,000 background checked Taskers for help without breaking the bank.</p>
          </div>

          <div className="splash-hero-cats">
            <Link to={ { pathname: '/task-form', category_id:21} }><button value="21">Mounting & Installation</button></Link>
            <Link to={ { pathname: '/task-form', category_id:22} }><button value="22">Moving & Packing</button></Link>
            <Link to={ { pathname: '/task-form', category_id:23} }><button value="23">Furniture Assembly</button></Link>
            <Link to={ { pathname: '/task-form', category_id:24} }><button value="24">Home Improvement</button></Link>
            <Link to={ { pathname: '/task-form', category_id:25} }><button value="25">General Handyman</button></Link>
            <Link to={ { pathname: '/task-form', category_id:26} }><button value="26">Heavy Lifting</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashHero;
