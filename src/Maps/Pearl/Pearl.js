import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import Lineups from '../../Components/Lineups.js';
import { AppContext } from '../../State/context.js';

class Pearl extends Component {
	componentDidMount() {
		this.context.updateMap('pearl', this.context.newDetail);
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

Pearl.contextType = AppContext;

export default Pearl;