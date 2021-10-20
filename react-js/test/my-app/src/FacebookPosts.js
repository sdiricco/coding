//FacebookPost.js

import React from 'react';
import './App.css';

function Post(props) {
  return (
    <div className="Post">
      <h2>{props.autore}</h2>
      <h4>{props.description}</h4>
      <button>Like</button>
    </div>
  )
}

export default Post;