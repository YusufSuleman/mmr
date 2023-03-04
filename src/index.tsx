/* @refresh reload */
import { render } from 'solid-js/web';
import { Router, Route, Routes } from "@solidjs/router";

import './index.scss';
import App from './App';
import Navbar from './Navbar';
import Header from './Header';
import { lazy, onMount, Suspense } from 'solid-js';

import Register from './Register';
import Post from './Post';
import Login from './Login';

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() =>
  <div id="content-root">
    <Header></Header>
    <Router>
      <Routes>
        <Route path="/" component={App} /> 
        <Route path="/latest/:pageNumber" component={App} /> 
        <Route path="/register" component={Register} />
        <Route path="/post/:id/" component={Post} />
        <Route path="/login" component={Login} />
      </Routes>
    </Router>
  </div>

, document.getElementById("root")!);
document.getElementById("content-root")?.classList.add("bravom")
document.getElementById("body")?.classList.add("bravom")

// document.getElementById("content-root")?.classList.add("morning-garden")
// document.getElementById("body")?.classList.add("morning-garden")
