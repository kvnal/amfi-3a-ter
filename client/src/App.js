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
import TopNav from './Components/Parts/TopNav';
import Watch from './Components/Watch';



function App() {

  return (
    <div className="App">
      <Router>
      <TopNav />
        <div className="fragment">
          <Switch>

            <Route exact path="/">
                
                <Home
                search ={true}
                title="Popular on title" />
            </Route>
            <Route exact path="/trending">
                <Home search={false} title="Trending" />
            </Route>
            <Route path="/watch/:id">
              <Watch/>
            </Route>

          </Switch>
        </div>
        <BottomNav/>
      </Router>
    </div>
  );
}

export default App;
