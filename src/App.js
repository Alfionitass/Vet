import React from "react";
import "./App.css";
import Home from './components/Home/Home';
//import Chat from './components/Chat/Chat';
import {
  BrowserRouter as Router,
  Switch,  
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
  <div>
     <Router>
        <div>
        <ul className="navpage">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="/Chat">Chat</Link>
            </li>
            
          </ul>
    

        
        <Switch>
          {/* <Route path="/Chat">
            <Chat />
          </Route> */}
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
      </Router>
  	
    
  </div>

  );
}

export default App;
