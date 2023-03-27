import React from 'react'
import logo from './assets/logo.jpg';
import picture from './assets/picture-icon.jpg';
import login from './assets/login.jpg';
import register from './assets/register.jpg';
import './Header.scss'

export default function Header() {
  return (
    <div className="main-container">
      <div className="left-side">
        <img src={logo} alt="Logo"/>
      </div>
      <div className="right-side">
        <div className="language-container">
          <select>
            <option value="English">
              English
            </option>
            <option value="English">
              Chinese
            </option>
            <option value="English">
              Dutch
            </option>
            <option value="English">
              German
            </option>
          </select>
        </div>
        <div className="vertical-line">

        </div>
        <div className="picture-container">
          <div className="wrapper">
            <img src={picture} alt=""/>
            <p>2D</p>
          </div>
        </div>
        <div className="vertical-line">

        </div>
        <div className="login-container">
          <img src={login} alt="Login"></img>
          <p>Login</p>
        </div>
        <div className="vertical-line">

        </div>
        <div className="register-container">
          <img src={register} alt="Register"></img>
          <p>Register</p>
        </div>
      </div>
    </div>
  )
}
