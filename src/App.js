import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './componants/Home/Home';
import NoMatch from './componants/NoMatch/NoMatch';
import PostDetail from './componants/PostDetail/PostDetail';
import Comment from './componants/Comment/Comment';

function App() {
  

  return (
    <div>
      <Router>
        <Switch>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/post/:postId'>
              <PostDetail></PostDetail>
          </Route>
          <Route path = '*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
