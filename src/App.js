import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
  render() {
    return (
      <div className="container-div">
        <div className="flex flex-column items-center">
          <h1>HookUp</h1>
          <article className="mb4">HookUp with someone from any of your social media handles and go out on a date with them.</article>
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />
        </div>
      </div>
    );
  }
}

export default App;
