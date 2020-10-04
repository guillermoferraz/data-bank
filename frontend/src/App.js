import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Welcome from './components/welcome';
import Buttons from './components/Buttons';

import createUser from './components/createUser';
import checkUser from  './components/checkUser';
import getHome from './components/getHome.js';
import Fail from './components/fail.js';




function App() {
  return (
   <Router>
     <Route exact path="/"  component={Welcome}/>
     <Route exact path="/" component={Buttons}/> 
    
    <Route  exact path="/api/users" component={createUser}/>
    <Route exact path="/check" component={checkUser}/>
    
    <Route exact path="/api/fail" component={Fail} />
    


    <Route exact path="/api/home" component={getHome}/>
   </Router>  
   
  );
}

export default App;
