import React from "react";
import "./App.css";
import logo from "./img/logo.png";

//router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

//components and pages
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults/SearchResults";
import Detail from "./pages/detail/Detail";

//context
import {GifsContext} from "./context/GifsContext";

function App() {
  return (
    <GifsContext>
      <Router>
        <div className="App">
          <section className="app-content">
            
            <Link to="/">
                <img src={logo} 
                      alt="giffmaster"
                      className="app-logo" 
                      />
            </Link>

            <Switch>
              <Route path="/" 
                      exact 
                      component={Home} 
                      />

              <Route path="/search/:keyword" 
                       component={SearchResults} 
                       />

              <Route path="/gif/:id" 
                        component={Detail} 
                        />

            </Switch>
          </section>
        </div>
      </Router>
    </GifsContext>
  );
}

export default App;
