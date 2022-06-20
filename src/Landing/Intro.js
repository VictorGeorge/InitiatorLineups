import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import classes from './Intro.module.css';
import fade_image from '../Media/intro_fade.png';

import { TweenLite, Expo } from 'gsap/all';
class Intro extends Component {
	constructor(props) {
		super(props);
		// reference to the DOM node
		this.header = null;
		this.title = null;
		this.text = null;
		// reference to the animation
		this.headerAnimation = null;
		this.titleAnimation = null;
		this.textAnimation = null;
	}
	componentDidMount() {
		// use the node ref to create the animation
		this.headerAnimation = TweenLite.from(this.header, 1, { x: -100, opacity: 0, ease: Expo.easeOut });
		this.titleAnimation = TweenLite.from(this.title, 2, { x: -400, ease: Expo.easeOut, delay: 1 });
		this.textAnimation = TweenLite.from(this.text, 2, { x: 1000, ease: Expo.easeOut, delay: 1 });
	}
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.main}>
					<div className={classes.right_line} />
					<div className={classes.background_text}>VALORANT</div>
					<div ref={(div) => (this.header = div)} className={classes.header}>
						<h1 className={classes.title}>
							<span>04/27 &nbsp;&nbsp; //</span>
							<span>INITIATOR</span>{' '}
						</h1>
					</div>
					<div className={classes.main_wrapper}>
						<div className={classes.left}>
							<h1 ref={(div) => (this.title = div)} className={classes.main_title}>
								FADE
							</h1>
							<div className={classes.info}>
								<div className={classes.origin}> Origin: &nbsp; Turkey</div>
								<div className={classes.origin}> Codename: &nbsp; BountyHunter</div>
								<h2 className={classes.info_text}>
								Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark. <br />
								</h2>
								<div className={classes.video_player}>
									<ReactPlayer
										width="300"
										className={classes.video}
										url="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt82a21218065dc472/625f2c47fd9afd4b1fe300ea/E-Haunt_video.mp4"
										muted={true}
										loop={true}
										playing={true}
										playsinline={true}
										controls={false}
									/>
								</div>
							</div>
						</div>
						<div className={classes.right}>
							<div className={classes.fade_image_container}>
								<img className={classes.fade_image} alt={'fade'} src={fade_image} height="1070" />
							</div>
							<div className={classes.fade_text}>FADE</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
