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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  // renderErrors() {
  //   return(
  //     <ul>
  //       {this.props.errors.session.map((error, i) => (
  //         <li key={`error-${i}`}>
  //           {error}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }

  handleErrors(string){
    // const myError = this.props.errors.session.filter(function (error) {
    //   error.includes(string);}
    // );

    let idx = this.props.errors.session.findIndex(error => error.includes(string))

    return <p>{this.props.errors.session[idx]}</p>;
  }

  render() {
    return (
      
      <div className="signup-form-container center-div">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
          <p>Welcome to TaskRubyt!</p>
          <br/>
          <div className="signup-form">
            <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signup-input"
                placeholder="Email"
              />
              {this.handleErrors("Email")}
            < br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signup-input"
                placeholder="Password"
              />
              {this.handleErrors("Password")}
              < br/>
              <input type="text"
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className="signup-input"
                placeholder="First Name"
              />
              {this.handleErrors("First")}
                < br/>
              <input type="text"
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className="signup-input"
                placeholder="Last Name"
              />
              {this.handleErrors("Last")}
                < br/>
              <input type="number"
                value={this.state.zip_code}
                onChange={this.update('zip_code')}
                className="signup-input"
                placeholder="Zip Code"
              />
              {this.handleErrors("Zip")}
              <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}



//   render() {
//     return (
//   <div>
//     <div className="container">
//       <div className="info">
//         <h1>Welcome to TaskRubyt!</h1>
//       </div>
//     </div>
//     <div className="form">
//       <form onSubmit={this.handleSubmit} className="register-form">
//       <br/>
//                 <input type="text"
//                   value={this.state.email}
//                   onChange={this.update('email')}
//                   className="signup-input"
//                   placeholder="Email"
//                 />
//               < br/>
//                 <input type="password"
//                   value={this.state.password}
//                   onChange={this.update('password')}
//                   className="signup-input"
//                   placeholder="Password"
//                 />
//                 < br/>
//                 <input type="text"
//                   value={this.state.first_name}
//                   onChange={this.update('first_name')}
//                   className="signup-input"
//                   placeholder="First Name"
//                 />
//                   < br/>
//                 <input type="text"
//                   value={this.state.last_name}
//                   onChange={this.update('last_name')}
//                   className="signup-input"
//                   placeholder="Last Name"
//                 />
//                   < br/>
//                 <input type="number"
//                   value={this.state.zip_code}
//                   onChange={this.update('zip_code')}
//                   className="signup-input"
//                   placeholder="Zip Code"
//                 />
//                 <br />
//                 <button className="session-submit" type="submit" value={this.props.formType}>create</button>
//         <p className="message">Already registered? <a href="#">Sign In</a></p>
//       </form>
//     </div>
//   </div>
//     );
//   }
// }

export default SignupForm;