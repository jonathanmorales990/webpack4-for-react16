import React, { Component } from 'react';
import './app.scss';
import Navbar from '../components/Navbar.jsx';

class App extends Component {
	render() {
		return (
			<div className='main'>
				<Navbar />
			</div>
		)    
  	}
}

export default App;
