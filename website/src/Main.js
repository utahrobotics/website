import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Sponsors from './components/Sponsors'
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

function Main() {
  return (
    <>
      <Route render={({ location }) => (
        <>
          <Header location={location}/>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/sponsors" component={Sponsors} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </>
      )} />
    </>
  );
}

export default Main;
