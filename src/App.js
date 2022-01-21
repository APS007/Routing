import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Register from "./Pages/Register";
import ProtectedRoute from './ProtectedRoute';
import useAuth from "./useAuth";

function App() {
  const [isAuth, login, logout] = useAuth(false)
  return (
    <div className="ui container">
      <Router>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard (Protected)</Link>
          </li>
          <li>
            <Link to="/Register">Register (UnProtected)</Link>
          </li>
        </ul>
        {isAuth ? (<><div>You are logged in..</div><button className="ui button blue" onClick={logout}>Logout</button></>) : (<><div >You are logged out..</div><button className="ui button blue" onClick={login}>Login</button></>)}
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/Register" component={Register} />
          <ProtectedRoute path="/Dashboard" component={Dashboard} auth={isAuth} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;