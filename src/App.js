import './App.css';
import React from "react";
import Main from "./components/main";
import Ticket from "./components/ticket";
import PlayCard from './components/PlayCard';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Switch>
        <Route path='/tambola/tickets' component={Ticket} />
        <Route path='/tambola/card' component={PlayCard} />
        <Route path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default React.memo(App);
