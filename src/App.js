import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Route, Switch} from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <HashRouter>
          <GlobalStyle/>
          <Navbar />
          <Switch>
              <Route exact path="/" component={Homepage}/>
              {/*<Route exact path="/contact" component={Contact}/>*/}
          </Switch>
          <Footer/>
      </HashRouter>
  );
}

export default App;
