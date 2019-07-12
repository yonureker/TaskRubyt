import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  componentWillMount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(e) {
    e.preventDefault();
    this.setState(
      { email: "yonureker@gmail.com", password: "12345678" },
      () => this.handleSubmit(e)
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.processForm(user).then(() => this.props.history.push('/'));
  }

  handleErrors(string){
    let idx = this.props.errors.session.findIndex(error => error.includes(string))
    return <p>{this.props.errors.session[idx]}</p>;
  }

  render() {
    return (
      <div className="signup-page">
      <div className="signup-form-container center-div">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <div className="signup-form">
          <div className="signup-form-logo">
            <img src="https://i.ibb.co/G9Q7mbk/diamond2.png" className="diamond" border="0" height="30" width="27" /><strong className="text">Task<span className="greeny">Rubyt</span></strong>
            </div>
              <br />
              <label>Email Address</label>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
              <label>Password</label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
              {this.handleErrors("Password")}
            <input className="session-submit" type="submit" value="Log In" />
            <input className="session-submit-demo" onClick={this.demoLogin} type="submit" value="Demo Log In" />
          </div>
        </form>
      </div>
      </div>
    );
  }
}

export default LoginForm;