import React from 'react';
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';

class SplashHero extends React.Component {
  constructor(props) {
    super(props)
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
            <Link to='/tasks'><button>Mounting & Installation</button></Link>
            <Link to='/tasks'><button>Moving & Packing</button></Link>
            <Link to='/tasks'><button>Furniture Assembly</button></Link>
            <Link to='/tasks'><button>Home Improvement</button></Link>
            <Link to='/tasks'><button>General Handyman</button></Link>
            <Link to='/tasks'><button>Heavy Lifting</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SplashHero;