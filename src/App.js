import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Rightbar from './components/Rightbar';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import BookMarks from './pages/BookMarks';
import Messages from './pages/Messages';
import Edit from './pages/Edit';
import More from './pages/More';
import Widgets from './pages/Widgets';
import Image from './pages/Image';

function App() {
  return (
    <div className="App flex">

          <Router>
            <Sidebar/>
            <div className='container '>
              <div className=' border-x ml-[330px]  w-[570px]'>
          
              <Switch>
                 
              <Route exact path="/">
              <Home/> 
                      </Route>
                      <Route  path="/home">
              <Home/> 
                      </Route>
                  
                      <Route path="/feed">
                               <Feed/> 
                      </Route>
                      <Route path="/profile">
                               <Profile/> 
                      </Route>
                      <Route path="/notifications">
                               <Notifications/> 
                      </Route>
                      <Route path="/bookmarks">
                               <BookMarks/> 
                      </Route>
                      <Route path="/messages">
                               <Messages/> 
                      </Route>
                      <Route path="/edit">
                               <Edit/> 
                      </Route>
                      <Route path="/more">
                               <More/> 
                      </Route>
                      <Route path="/widgets">
                               <Widgets/> 
                      </Route>
                      <Route path="/image">
                               <Image/> 
                      </Route>
                    </Switch>
              </div>
                   
            </div>   
           
            <Rightbar/> 

          </Router>
    </div>
  );
}

export default App;
