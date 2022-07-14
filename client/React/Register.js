import React from 'react';
import { useState, useEffect } from 'react';

const Register = props => {

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (event) => {
    alert('A username was submitted: ' + user + ' with password: ' + pass);
    setPass('');
  }

  const handleChange = async (event) => {
    if (event.target.className === 'userBox') setUser(event.target.value);
    else if (event.target.className === 'passBox') setPass(event.target.value);
    else throw new Error('Error in handleChange of Register. Bad classname: ' + event.target.className);
  }

  useEffect(() => {
    document.title = 'Registration';
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>Username
        <input type="text" value={user} className="userBox" onChange={handleChange} placeholder="Username"/>
      </label>
      <label>Password
        <input type="text" value={pass} className="passBox" onChange={handleChange} placeholder="Username"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
 }

 export default Register;