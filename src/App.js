import React, { Suspense } from 'react';
import { Link, BrowserRouter as Router, Route} from 'react-router-dom';
// import About from './about.js';
// import Contact from './contact.js';
import './App.css';

function App() {

  const About = React.lazy(() => import('./about.js'))
  const Contact = React.lazy(() => import('./contact.js'))

  return (
    <div className="App">
      <Router>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
        <Suspense fallback={
          <div>
            Loading...
          </div>
        }>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
