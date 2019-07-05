import React from 'react';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className="splash-hero">
        <div className="splash-hero-slogan">
        <p>The convenient and affordable way
to get things done around the home.</p>
        </div>
      </div>
    )
  }
}

export default SplashPage;