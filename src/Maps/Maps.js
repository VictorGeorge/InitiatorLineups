import React from 'react';
import Map from '../Map/Map.js';
import classes from './Maps.module.css';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../State/context.js';
import map_1 from '../Media/map_1.jpg';
import map_2 from '../Media/map_2.jpg';
import map_3 from '../Media/map_3.jpg';
import map_4 from '../Media/map_4.jpg';
import map_5 from '../Media/map_5.JPG';
import map_6 from '../Media/map_6.JPG';
const Maps = () => {
	return (
		<AppConsumer>
			{(value) => (
				<div className={classes.container}>
					<div className={classes.main}>
						<div className={classes.right} />

						<div className={classes.map_selection}>
							<div className={classes.whiteline_left} />
							<div className={classes.whiteline_right} />
							<div className={classes.map_container}>
								<div className={classes.map_title} >
									<h1 className={classes.title}>Maps</h1>
								</div>
								<div className={classes.map_wrapper}>
									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/bind'}>
										<Map title={'Bind'} location={'Morocco'} map={map_1} />
									</Link>

									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/haven'}>
										<Map title={'Haven'} location={'Bhutan'} map={map_2} />
									</Link>

									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/split'}>
										<Map title={'Split'} location={'Tokyo'} map={map_3} />
									</Link>
									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/ascent'}>
										<Map title={'Ascent'} location={'Venice'} map={map_4} />
									</Link>
									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/icebox'}>
										<Map title={'Icebox'} location={'Russia'} map={map_5} />
									</Link>
									<Link className={classes.link} style={{ textDecoration: 'none' }} to={'/breeze'}>
										<Map title={'Breeze'} location={'Bermuda Triangle'} map={map_6} />
									</Link>
								</div>
							</div>
						</div>

						<div className={classes.right} />
					</div>
				</div>
			)}
		</AppConsumer>
	);
};

export default Maps;
