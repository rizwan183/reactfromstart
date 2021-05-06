import React from "react";
import Shayari from './Shayri';
// import Post from './post'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function SRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Shayari />
          </Route>
          {/* <Route path="/post">
            <Post />
          </Route> */}
        </Switch>
        
      </div>
    </Router>
  );
}