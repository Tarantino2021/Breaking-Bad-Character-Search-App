import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "./pages/home";
import MyList from "./pages/MyList";
//components
import Header from "./components/header";
//Styles
import "./App.scss";
//Image

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/mylist" component={MyList} />
      </Switch>
    </Router>
  );
}

export default App;
