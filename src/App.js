import React from "react";
import "./App.css";

//router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components and pages
import Home from "./pages/home/Home";
import SearchResults from "./pages/searchResults/SearchResults";
import Detail from "./pages/detail/Detail";

//context
import {GifsContext} from "./context/GifsContext";
import Header from './components/header/Header';

function App() {
  return (
    <GifsContext>
      <Router>
        <>
          <section className="app-content">
            
            <Header/>

            

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
        </>
      </Router>
    </GifsContext>
  );
}

export default App;
