import React, { Component, useEffect, useState } from 'react';

const Tracker = props => {

  const [projectContainer, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/NavBar/project', {mode:'cors'})
    .then( response => response.json())
    .then( data => {
      const arr = [];
      for (const ele of data) {
        console.log(ele);
        const {_id, title, status, body, createdAt} = ele;
        arr.push(<Project key={_id} title={title} status={status} body={body} createdAt={createdAt}/>);
      }
      setProjects(arr);
    })
    .catch( err => console.error(err) )
  }, []);
  
  return (
    <div className='allProjects'>
      {projectContainer}
    </div>
  )
}

const Project = props => {
  return (
    <div className='projectContainer'>
      <h2>{props.title}</h2>
      <div>Status: {props.status}</div>
      <div>Details: {props.body}</div>
      <div>Created: {props.createdAt}</div>
    </div>
  )
}

export default Tracker;