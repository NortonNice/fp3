import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import NewUser from "./pages/NewUser";

import './App.css';
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <Router>
      <div>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/plans" component={Plans} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Registration} />
        
    </div>
    </Router>
      );
}




export default App;
