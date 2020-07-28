import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import {BrowserRouter, Route, Redirect} from 'react-router-dom';

import NavigationMenu from './components/NavigationMenu';
import HelloWorld from './components/functionalComponents/HelloWorld'
import Composition from './components/functionalComponents/Composition'
import ConditionalRendering from './components/functionalComponents/ConditionalRendering'
import PreventingRendering from './components/functionalComponents/PreventingRendering'
import Welcome from './components/classComponents/Welcome';
import Counter from './components/classComponents/Counter';
import LifeCycleMethods from './components/classComponents/LifeCycleMethods';
import CounterEventHandler from './components/classComponents/CounterEventHandler';
import LiftingStateApp from './components/classComponents/LiftingStateUp';
import Game from './components/Game';
import Lists, { ListsMap, ListsMapKeys, ListsMapIndexKeys } from './components/Lists';
import ExtractingListItems from './components/ExtractingListItems';
import Forms, { ControlledInputField, ControlledCheckboxes, ControlledTextArea, ControlledSelect, ControlledSelectDynamically } from './components/Forms';
import Poster from './components/Poster';
import RestApiConsume, {PokemonApi} from './components/RestApiConsume';
import Hooks from './components/Hooks';

ReactDOM.render(
  <React.StrictMode>
    <NavigationMenu />
      <BrowserRouter>
        <Route exact path='/'>
          <Redirect to="/Home"></Redirect>
        </Route>
        <Route path='/Home' component={App} />
        <Container>
          <Route path='/HelloWorld'>
            <HelloWorld message = 'Este es mi mensaje!' />
          </Route>
          <Route path='/Composition'>
            <Composition />
          </Route>
          <Route path='/ConditionalRendering'>
            <ConditionalRendering active = {true} />
          </Route>
          <Route path='/PreventingRendering'>
            <PreventingRendering active = {true} message = 'It is preventing rendering' />
          </Route>
          <Route path='/Welcome'>
            <Welcome active = {true} message = 'It is preventing rendering' />
          </Route>
          <Route path='/Counter'>
            <Counter />
          </Route>
          <Route path='/LifeCycleMethods'>
            <LifeCycleMethods />
          </Route>
          <Route path='/EventHandler'>
            <CounterEventHandler />
          </Route>
          <Route path='/LiftingStateUp'>
            <LiftingStateApp />
          </Route>
          <Route path='/Game'>
            <Game />
          </Route>
        </Container>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/Lists'>
        <Lists />
        <ListsMap />
        <ListsMapKeys />
        <ListsMapIndexKeys />
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('lists')
)

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/ExtractingListItems'>
        <ExtractingListItems />
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('extracting-list-items')
)

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/Forms'>
        <Row>
          <Col><Forms /></Col>
          <Col><ControlledInputField /></Col>
          <Col><ControlledCheckboxes /></Col>
        </Row>
        <Row>
          <Col><ControlledTextArea /></Col>
          <Col><ControlledSelect /></Col>
          <Col><ControlledSelectDynamically /></Col>
        </Row>
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('forms')
)

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/Poster'>
        <Poster />
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('poster')
)

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/RestApiConsume'>
        <Row>
          <Col>
            <br></br>
            <RestApiConsume />
          </Col>
          <Col>
          <br></br>
            <PokemonApi />
          </Col>
        </Row>
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('blog')
)

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <Route path='/Hooks'>
        <Hooks />
      </Route>
    </Container>
  </BrowserRouter>,
  document.getElementById('hooks')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
