import React, { Suspense, useEffect, useState } from 'react';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import About from './about.js';
// import Contact from './contact.js';
// import Image from './image.js';
import img from './mountain-top-4k.jpg';
import './App.css';

function App() {

  const preloadLazyLoad = (componentToLoad) => {
    const Component = React.lazy(componentToLoad);
    Component.preload = componentToLoad;
    return Component;
  }

  const [test, setTest] = useState(false);
  const About = React.lazy(() => import('./about.js'))
  const Contact = React.lazy(() => import('./contact.js'))
  // const Image = React.lazy(()=> import('./image.js'))
  const Image = preloadLazyLoad(()=> import('./image.js'))
  // const img = preloadLazyLoad(()=> import('./mountain-top-4k.jpg'))
  // setTest(preloadLazyLoad(()=> import('./mountain-top-4k.jpg')))

  useEffect(() => {
    // console.log('yes?');
    // Image.preload();
    // img.preload();
    // test.preload();
    // setTest(test.preload());
    // import img from './mountain-top-4k.jpg';
    setTest(true);
  },[])

  const onClick = () => {
    // console.log('yes');
    // Image.preload();
    setTest(true);
  }

  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Link to="./about">About </Link>
        <Link to="./contact">Contact </Link>
        <Link to="./image">Image </Link>
        <Suspense fallback={
          <div>
            Loading...
          </div>
        }>
          {/* <Image/> */}
          {/* <img src={test} className="image" alt="mountain"/> */}
          <p onClick={onClick}>click to load</p>
          <div hidden={true}>
            {test && <img src={img} className="image" alt="mountain"/>}
          </div>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            {/* <Route exact path="/image" component={Image}/> */}
            <Route exact path="/image" render={props=><Image {...props} img={img}/>}/>
          </Switch>
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
