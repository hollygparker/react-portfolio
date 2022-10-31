import "./index.css";
// ROUTING IMPORTS
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
// COMPONENTS
import { NavBar } from "./components/NavBar";
import Landing from "./components/Landing";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
   {/* <BrowserRouter> */}
      <HashRouter>
      <NavBar />
        <Router>
          <Switch>
          <Route path="/portfolio">
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
          </Router>
      <Footer />
      </HashRouter>
{/* </BrowserRouter> */}
    </>
  );
}

export default App;

