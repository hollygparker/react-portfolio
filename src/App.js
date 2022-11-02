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
      {/* <HashRouter> */}
      <NavBar />
        <Router>
          <Switch>
          <Route exact path="/react-portfolio">
            <Landing />
          </Route>
          <Route path="/react-portfolioProjects">
            <Projects />
          </Route>
          <Route path="/react-portfolioContact">
            <ContactForm />
          </Route>
          <Route  path="/react-portfolioAbout">
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

