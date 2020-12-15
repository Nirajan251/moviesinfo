import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';


//code spliting garya
const HomePage = React.lazy(() => import("./components/HomePage"));
const Movies = React.lazy(() => import("./components/Movies"));
const SingleMoviePage = React.lazy(() => import("./components/singlePage"));
const SingleTvPage = React.lazy (() => import("./components/singlePage2"));

function App() {

  
  return (
    <Router>
      <Navbar/>
      
      <React.Suspense fallback={"loading......"}>
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/movies/:id' component={SingleMoviePage}/>
        <Route path='/movie' component={Movies}/>
        <Route path='/tv/:id' component={SingleTvPage} />
      </Switch>
      </React.Suspense>
    </Router>
  )
}

export default App;

