import React from 'react';
import { useState, useEffect } from 'react';

const Login = props => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    alert('A username was submitted: ' + user + ' with password: ' + pass);
    setPass('');
  }

  const handleChange = async (event) => {
    if (event.target.className === 'userBox') setUser(event.target.value);
    else if (event.target.className === 'passBox') setPass(event.target.value);
    else throw new Error('Error in handleChange of Login. Bad classname: ' + event.target.className);
  }

  useEffect(() => {
    document.title = 'Login for: ' + user;
  });

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <label>Username
          <input type="text" value={user} className="userBox" onChange={handleChange} placeholder="Username"/>
        </label>
        <label className="">Password
          <input type="text" value={pass} className="passBox" onChange={handleChange} placeholder="Username"/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
 }

 export default Login;