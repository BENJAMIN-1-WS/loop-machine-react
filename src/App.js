import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import Descrition from './components/descrition';
import NotFound from './components/not-foud';
import { Redirect, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Switch>
        <Route exact path='/' component={(props) =>
          <Home ></Home>}>
        </Route>
        <Route path='/descrition' component={(props) =>
          <Descrition />
        }>
        </Route>
        <Route path="/not-found" component={NotFound}></Route>
        <Redirect to="/not-found"></Redirect>
      </Switch>
    </div>
  )
}
export default App;
