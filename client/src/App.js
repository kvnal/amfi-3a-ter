import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from 'react-router-dom';
import BottomNav from './Components/BottomNav';
import Home from './Components/Home';
import Trending  from './Components/Trending';


function App() {
  
  return (
    <div className="App">
      <Router>

        <div className="fragment">
          <Switch>

            <Route exact path="/">
                <Home
                title="Popular on onlyCheems" />
            </Route>
            <Route exact path="/trending">
                <Trending/>

            </Route>

          </Switch>
        </div>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;
