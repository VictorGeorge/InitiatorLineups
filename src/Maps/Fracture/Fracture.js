import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import Lineups from '../../Components/Lineups.js';
import { AppContext } from '../../State/context.js';

class Fracture extends Component {
	componentDidMount() {
		this.context.updateMap('fracture', this.context.newDetail);
	}

	render() {
		return (
			<div>
				<Nav />
				<Lineups />
			</div>
		);
	}
}

Fracture.contextType = AppContext;

export default Fracture;
