import React from 'react';
import NavBarContainer from '../navbar/navbar_container'
import { Link } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user).then(() => this.props.history.push('/'));
    this.props.logout.then(() => this.props.history.push('/'));
  }

  render(){
    // const user = this.props.currentUser


    return(
    <div className="account-page">
      <div className="account-container">
        <div className="account-container-content">
          <div className="account-container-content-left">
            <img src="https://avatars0.githubusercontent.com/u/12437011?s=400&u=19e8126282412459ba02540f093597955d71aac0&v=4" height="200" width="200"/>
          </div>
          <div className="account-container-content-right">
            <ul>
              <li className="name">{this.props.currentUser.first_name}{' '}{this.props.currentUser.last_name}</li>
              <li className="email">{this.props.currentUser.email}</li>
              <li className="zip-code">{this.props.currentUser.zip_code}</li>
              <Link to='/'>
              <button className="header-button" onClick={this.props.logout}>Log Out</button>
              </Link>
          </ul>
        </div>
       </div>
      </div>
    </div>
    )
  }
}

export default Account;
