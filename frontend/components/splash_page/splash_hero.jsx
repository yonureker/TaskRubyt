import React from 'react';
import SearchBar from './search_bar';
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
            <button>Mounting & Installation</button>
            <button>Moving & Packing</button>
            <button>Furniture Assembly</button>
            <button>Home Improvement</button>
            <button>General Handyman</button>
            <button>Heavy Lifting</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashHero;