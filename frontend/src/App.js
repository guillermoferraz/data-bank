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
import createNote from './components/createNote.js';
import getNote from './components/getNotes.js';
import createList from './components/createList.js';
import getLists from './components/getList';
import avatarForm from './components/avatarForm';
import createMyBlog from './components/createMyBlog';
import getMyBlog from './components/getMyBlog';




function App() {
  return (
   <Router>
     <Route exact path="/"  component={Welcome}/>
     <Route exact path="/" component={Buttons}/> 
     <Route  exact path="/api/users" component={createUser}/>
     <Route exact path="/check" component={checkUser}/>
     <Route exact path="/api/fail" component={Fail} />
     <Route exact path="/api/home" component={getHome}/>
     <Route exact path="/api/home/createNote" component={getHome}/>
     <Route exact path="/api/home/createNote" component={createNote}/>
     
     <Route exact path="/api/home/editNote/:id" component={getHome}/>
     <Route exact path="/api/home/editNote/:id" component={createNote}/>
     
     <Route exact path="/api/home" component={getNote}/>


     <Route exact path="/api/createList" component={getHome}/>
     <Route exact path="/api/createList" component={createList} />
     
     <Route exact  path="/api/lists" component={getHome}/>
     <Route exact  path="/api/lists" component={getLists}/>

     <Route exact path="/api/editLists/:id" component={getHome}/>
     <Route exact path="/api/editLists/:id" component={createList}/>
     

     <Route exact path="/avatarForm" component={getHome}/>
     <Route exact path="/avatarForm" component={avatarForm}/>

     <Route exact path="/api/createMyBlog" component={getHome}/>
     <Route exact path="/api/createMyBlog" component={createMyBlog}/>
    

     <Route exact path="/api/myBlog/editBlog/:id" component={getHome}/>
     <Route exact path="/api/myBlog/editBlog/:id" component={createMyBlog}/>

     <Route exact path="/api/myBlog" component={getHome}/>
     <Route exact path="/api/myBlog" component={getMyBlog}/>
     
   </Router>  
   
  );
}

export default App;
