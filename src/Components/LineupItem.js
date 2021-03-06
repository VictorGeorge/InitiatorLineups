import React, { Component } from 'react';
import { AppConsumer } from '../State/context';
import classes from './LineupItem.module.css';
import Difficulty from './Icons/Difficulty.js';

class LineupItem extends Component {

	render() {

		const limitInfo = (title, limit = 100) => {
			let newTitle = [];
			if (title.length > limit) {
				title.split(' ').reduce((acc, cur) => {
					if (acc + cur.length <= limit || acc === 0) {
						newTitle.push(cur);
					}
					return acc + cur.length;
				}, 0);

				return `${newTitle.join(' ')}...`;
			}
			return title;
		};
		const { id, title, info, essential, difficulty, isActive, side, site } = this.props.lineup;
		let essential_icon;
		let activeclass;
		let dart_side;
		let dart_site;
		let information = limitInfo(info);
		if (essential === true) {
			essential_icon = <div className={classes.essential_icon}>Essential</div>;
		}
		if (isActive === true) {
			activeclass = classes.active;
		}
		if (side === 'Attacking') {
			dart_side = <div className={`${classes.essential_icon} ${classes.attacking}`}>Attacking</div>;
		} else if (side === 'Defending') {
			dart_side = <div className={`${classes.essential_icon} ${classes.defending}`}>Defending</div>;
		} else {
			dart_side = '';
		}

		if (site === "A Site") {
			dart_site = <div className={`${classes.essential_icon} ${classes.site}`}>A Site</div>;
		} else if (site === "B Site") {
			dart_site = <div className={`${classes.essential_icon} ${classes.site}`}>B Site</div>;
		} else if (site === "C Site") {
			dart_site = <div className={`${classes.essential_icon} ${classes.site}`}>C Site</div>;
		} else if (site === "Mid") {
			dart_site = <div className={`${classes.essential_icon} ${classes.site}`}>Mid</div>;
		} else {
			dart_site = '';
		}

		return (
			<AppConsumer>
				{(value) => (
					
					<div className={`${classes.container} ${activeclass}`}>
                        <div ref={(div) => (this.lineupItem = div)}  className={classes.background}></div>
						<div className={classes.main} onClick={() => value.setDetailLineup(id)}>
							<h1 className={classes.title}>{title}</h1>
							<div className={classes.filters}>
								<Difficulty color={difficulty} />
								{essential_icon}
								{dart_side}
								{dart_site}
							</div>
							<h2 className={classes.info_text}>{information}</h2>
						</div>
					</div>
				)}
			</AppConsumer>
		);
	}
}

export default LineupItem;
