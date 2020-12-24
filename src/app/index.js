import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { useStateValue } from "../store/context/StateProvider";
import React, { useEffect } from "react";
import { auth } from "../config/firebase";
import { setUser } from "../store/actions";
import Header from "../components/header";
import Footer from "../components/footer";
import Home from "../pages/home";
import Login from "../pages/login";

function App() {
  const [{ users, user }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in or has been authorized
        dispatch(setUser(authUser.providerData[0]))
      } else {
        // user is not logged in
        dispatch(setUser(null))
      }
    })
  }, [dispatch])

  return (
    <Router>
      <Redirect to={{
        pathname: user ? '/' : '/login'
      }} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Header user={user} />
          <Home dispatch={dispatch} users={users} currentUser={user} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
