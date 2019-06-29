import React from 'react';
import './App.css';
import PostForm from './Component/PostForm';
import AllPost from './Component/AllPost';

function App() {
  return (
    <div className="App">
      <div className="navbar">
    <h2 className="center ">Post It</h2>
    </div>
    <PostForm />
    <AllPost />
    </div>
  );
}

export default App;
