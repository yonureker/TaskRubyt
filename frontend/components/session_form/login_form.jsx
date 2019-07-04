import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo(e) {
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

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container center-div">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {/* Welcome to TaskRubyt!
          <br/>
          Please {this.props.formType} or {this.props.navLink} */}
          <div className="login-form">
              <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;