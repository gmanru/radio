import React from "react";
import { Route } from "react-router-dom";

import ArticleList from "./containers/ArticleListView";
import ArticleDetail from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import VideoStream from "./store/actions/Video_str";
import Signup from "./containers/Signup";
import Radio from './store/actions/Radio';

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Radio} />{" "}
    <Route exact path="/radio" component={Radio} />{" "}
    <Route exact path="/video_str" component={VideoStream} />{" "}
    <Route exact path="/articles/:articleID/" component={ArticleDetail} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/signup/" component={Signup} />{" "}
  </div>
);

export default BaseRouter;
