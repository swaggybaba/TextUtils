import Navbar from "./Components/Navbar.js";
import "./App.css";
import Form from "./Components/Form.js";
import About from "./Components/About.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Form />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
