import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import PostBlog from './components/PostBlog';
import ShowBlog from './components/ShowBlog';
import EditBlog from './components/EditBlog';
import Header from './components/Header';

import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <ToastContainer autoClose={2000}/>
          <Switch>
            <Route exact path="/" component={ShowBlog} />
            <Route exact path="/blog/edit/:id" component={EditBlog} />
            <Route exact path="/new" component={PostBlog} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
