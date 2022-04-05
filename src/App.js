import Navbar from "./components/Navbar/Navbar";
import { HashRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <HashRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/aboutme" component={AboutMe} />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default App;
