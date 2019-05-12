import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import PostBlog from './components/PostBlog';
import ShowBlog from './components/ShowBlog';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={ShowBlog} />
            <Route exact path="/new" component={PostBlog} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
