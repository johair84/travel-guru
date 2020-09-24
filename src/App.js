import React from 'react';
import Book from './Component/Book/Book';
import Header from './Component/Header/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import TourPlace from './Component/TourPlace/TourPlace';

const App = () => {
  return (
   
   <Router>
      <Header></Header>
       <Home></Home>
         <Switch>
           <Route path="/TourPlace">
              <TourPlace></TourPlace>
           </Route>
           
         </Switch>
      
   </Router>
      
     
     
  
    
  );
};

export default App;