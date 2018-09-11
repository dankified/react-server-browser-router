import React, { Component } from 'react';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Root = () => {
	return (
		<div>
			
		<BrowserRouter>
			<div>
				<Link to="/contact">Contact </Link>
				<Link to="/">Home </Link>
				<Link to="/about">About </Link>
				<Route exact path='/' component={Home} />
				<Route path='/contact' component={() => <Contact hi="Hello!" />} />
				<Route path='/about' component={About} />
			</div>
		</BrowserRouter>
		</div>
	)
}

class App extends Component {
  render() {
    return (
			<div>
				<Root />
			</div>
    );
  }
}

export default App;
