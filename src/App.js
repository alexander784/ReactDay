import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {

  const title = 'welcome to the new blog'
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='Content'>
         
         {/* Make sure only one Route shows at any one time  */}
        <Switch>
        {/* path for Homepage */}
          <Route path="/">
            <Home/>
          </Route>

          <Route path="/Create">
            <Create/>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
