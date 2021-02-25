import React from "react";

import Portfolio from "./PortfolioComps/Portfolio";
import Contact from "./SidebarComps/Contact";
import PageStory from "./PortfolioComps/PageStory";
import Cv from "./Cv";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./SidebarComps/Sidebar";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Sidebar />
          <div>
            <Switch>
              <Route exact path="/">
                <Portfolio />
              </Route>
              <Route path="/storyboard">
                <PageStory />
              </Route>
              <Route path="/cv">
                <Cv />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
