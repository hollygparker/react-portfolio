import "./index.css";
import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import Landing from "./components/Landing";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
