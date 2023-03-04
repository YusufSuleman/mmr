import { Component, onMount } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Header from './Header';
import Post from './Post';
import { useParams } from '@solidjs/router';


const App: Component = () => {

  return (
      <Post id="latest" pageNumber={useParams().pageNumber}></Post>
  );
};

export default App;
