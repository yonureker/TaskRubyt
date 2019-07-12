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
            <button value="2">Moving & Packing</button>
            <button value="3">Furniture Assembly</button>
            <button value="4">Home Improvement</button>
            <button value="5">General Handyman</button>
            <button value="6">Heavy Lifting</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashHero;
