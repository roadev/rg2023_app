import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Points from "./pages/Points";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registry">Registro</Link>
            </li>
            <li>
              <Link to="/points">Puntos</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <Switch>
          {/* <Route path="/registry">
            <Registry />
          </Route> */}
          <Route path="/points">
            <Points />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
