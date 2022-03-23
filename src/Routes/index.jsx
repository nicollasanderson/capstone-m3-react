import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup";
import HomePage from "../Pages/Home";
import GamesPage from "../Pages/Games";
import Game from "../Pages/Game";
import Profile from "../Pages/Profile";
import SearchGame from "../Pages/SearchGame";
import AboutUs from "../Pages/AboutUs";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/search">
        <SearchGame />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile/:id">
        <Profile />
      </Route>
      <Route path="/games">
        <GamesPage />
      </Route>
      <Route path="/gameInfo/:slug">
        <Game />
      </Route>
      <Route path="/aboutus">
        <AboutUs />
      </Route>
    </Switch>
  );
};

export default Routes;
