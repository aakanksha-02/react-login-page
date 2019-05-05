import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import loginData from '../data/LoginData.json';

export default class Login extends Component {
  
  state = {
    username: '',
    password: '',
    success: '',
    error: '',
  };

  dismissError = (e) => {
    this.setState({ error: '' });
  }

  handleChange = (e) => {
    const { target: {value, id } } = e;
    this.setState({
      [id]: value
    })
  }
    
  handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = loginData;
    if (!this.state.username || !this.state.password) 
      return this.setState({ error: 'Username and Password are mandatory field.' });
    if(this.state.username !== username || this.state.password !== password)
      return this.setState({ error: 'Invalid Id/Password' });
    if(this.state.username === username && this.state.password === password){
      let sessionData;
      sessionData = {username: this.state.username, password: this.state.password};
      sessionStorage.setItem("userData", JSON.stringify(sessionData)); //Storing session for the logged in user.
      return this.setState({ success: 1 });
    }
  return this.setState({ error: '' });
  }

  render() {
    //User can log in only if they enter correct Id/password OR their session is stored in browser.
    if(this.state.success || sessionStorage.getItem('userData')){
      return (<Redirect to={'/EmployeeList'}/>)
    }
    return (
      <div className="login">
        <form onSubmit = {this.handleSubmit}> 
          {
            this.state.error &&
            <p className="error-msg" onClick={this.dismissError}>
              <button className="form-btn" onClick={this.dismissError}>✖</button>
              {this.state.error}
            </p>
          }
          <div className="form-field-wrapper" className="form-field">          
            <input className="form-field-input" type="text" id="username" onChange={this.handleChange}></input>
            <label className="form-field-label" htmlFor="name">Username: </label>
          </div>
          <div className="form-field-wrapper" className="form-field">  
            <input className="form-field-input" type="password" id="password" onChange={this.handleChange}></input>
            <label className="form-field-label" htmlFor="name">Password: </label>
          </div>
          <div className="form-submit-btn-wrapper">
            <button className="form-btn" >Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
