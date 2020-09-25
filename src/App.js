import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Coxsbazar from './Components/Coxsbazar/Coxsbazar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Serrmangal from './Components/Serrmangal/Serrmangal';
import Sundarban from './Components/Sundarban/Sundarban';
import SelectRoom from './Components/SelectRoom/SelectRoom';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();
function App (props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
   
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <h3>email: {loggedInUser.email}</h3>
    <h3>name: {loggedInUser.name}</h3>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
              <Home></Home>
          </Route>
        <Route path="/login">
            <Login></Login>
        </Route>

        <Route path="/coxbazar">
            <Coxsbazar></Coxsbazar>
        </Route>

        <Route path="/serrmangal">
            <Serrmangal></Serrmangal>
        </Route>

        <Route path="/sundorban">
            <Sundarban></Sundarban>
        </Route>

        <PrivateRoute path="/selectRoom">
            <SelectRoom></SelectRoom>
        </PrivateRoute>

        <Route path="/book/:bedType">
             <Book></Book>
        </Route>

        <Route exact path="/">
             <Home></Home>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
};

export default App;