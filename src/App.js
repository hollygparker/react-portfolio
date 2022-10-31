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
   <BrowserRouter>
      {/* <HashRouter basename="/"> */}

      <NavBar />
        <Router>
          <Switch>
          <Route path="/react-portfolio/#/portfolio">
            <Landing />
          </Route>
          <Route path="/react-portfolio/#/projects">
            <Projects />
          </Route>
          <Route path="/react-portfolio/#/contact">
            <ContactForm />
          </Route>
          <Route path="/react-portfolio/#/about">
            <About />
          </Route>
          </Switch>
          </Router>
      <Footer />
      {/* </HashRouter> */}
</BrowserRouter>
    </>
  );
}

export default App;

