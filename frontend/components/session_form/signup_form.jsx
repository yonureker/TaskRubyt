import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      zip_code: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
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
      <div className="signup-form-container center-div">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          {/* Welcome to TaskRubyt!
          <br/>
          Please {this.props.formType} or {this.props.navLink} */}
          <div className="signup-form">
            <br/>
            <label>Email:
              < br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>Password:
            < br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
              />
            </label>
            <br/>
            <label>First Name:
              < br/>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
              />
            </label>
            <br />
            <label>Last Name:
                < br/>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
              />
              </label>
              <br/>
              <label>Zip Code:
                < br/>
              <input type="number"
                value={this.state.zip_code}
                onChange={this.update('zip_code')}
                className="signup-input"
              />
              </label>
              <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;