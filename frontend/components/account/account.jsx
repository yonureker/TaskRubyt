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
      <NavBarContainer />
      <div className="account-container">
        <div className="account-container-content">
          <div className="account-container-content-left">
            ABC
          </div>
          <div className="account-container-content-right">
            <ul>
              <li>{this.props.currentUser.first_name}{' '}{this.props.currentUser.last_name}</li>
              <li>{this.props.currentUser.email}</li>
              <li>{this.props.currentUser.zip_code}</li>
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
