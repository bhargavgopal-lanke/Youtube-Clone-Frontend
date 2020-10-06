import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import MainPage from './Pages/MainPage/MainPage';
import SigninPage from './Pages/SigninPage/SigninPage';
import Navbar from './Components/Navbar/Navbar';
import AccountPage from './Pages/AccountPage/AccountPage';
import UploadPage from './Pages/UploadPage/UploadPage';
import { ToggleSidebarContext } from './Helpers/Context';

function App() {

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <ToggleSidebarContext.Provider value={showSidebar, setShowSidebar}>
    <div className="App">
    <div className="top">
      <Navbar />
    </div>
      <Router>
        <Switch>
          <Route path="/" exact render={ ()=> <MainPage /> } />
          <Route path="/signin" exact render={ ()=> <SigninPage /> } />
          <Route path="/account" exact render={ ()=> <AccountPage /> } />
          <Route path="/upload" exact render={ ()=> <UploadPage /> } />
        </Switch>
      </Router>
    </div>
    </ToggleSidebarContext.Provider>
  );
}

export default App;
