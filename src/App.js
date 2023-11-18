import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from react-Router-dom
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {

  const title = 'welcome to the new blog'
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='Content'>
        {/* switch Make sure only one route shows at only one time  */}
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route path ="/create">
            <Create />
          </Route>
          <Route path ="/blogs/:id">
            <BlogDetails />
          </Route>

          


        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
