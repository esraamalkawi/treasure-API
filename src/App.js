import "./App.css";
import React from "react";
import Swal from "sweetalert2";
import TreasureList from "./components/TreasureList";
import GarbageList from "./components/GarbageList";
import { Route, Switch } from "react-router";
import Signin from "./components/users/Signin";
import Signup from "./components/users/Signup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "./store/actions/authActions";

function App() {
  const user = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  return (
    <div>
      {user ? (
        <>
          <h1>hello {user.username}</h1>
          {/* {Swal.fire("Any fool can use a computer")} */}
          <button onClick={() => dispatch(signout())}>signout</button>
          <Link to="/things"> things</Link>
          <Link to="/garbage"> garbage</Link>
        </>
      ) : (
        <>
          <Link to="/signin"> signin</Link>
          <Link to="/signup"> signup</Link>
          <Link to="/garbage"> garbage</Link>
        </>
      )}

      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/garbage">
          <GarbageList />
        </Route>
        <Route path="/things">
          <TreasureList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
