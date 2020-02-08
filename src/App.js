import React, { Suspense } from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import About from './about.js';
// import Contact from './contact.js';
import './App.css';

function App() {

  const About = React.lazy(() => import('./about.js'))
  const Contact = React.lazy(() => import('./contact.js'))

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="./about">about</Link>
        <Link to="./contact">contact</Link>
        <Suspense fallback={
          <div>
            Loading...
          </div>
        }>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
