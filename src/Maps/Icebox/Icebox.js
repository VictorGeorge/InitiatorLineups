import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import Lineups from '../../Components/Lineups.js';
import { AppContext } from '../../State/context.js';

class Icebox extends Component {
	componentDidMount() {
		this.context.updateMap('icebox', this.context.newDetail);
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

Icebox.contextType = AppContext;

export default Icebox;
