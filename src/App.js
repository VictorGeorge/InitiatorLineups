import React from 'react';
import ScrollToTop from './Animation/ScrollToTop.js';
import './App.css';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Landing from './Landing/Landing.js';
import Bind from './Maps/Bind/Bind.js';
import Haven from './Maps/Haven/Haven.js';
import Split from './Maps/Split/Split.js';
import Ascent from './Maps/Ascent/Ascent.js';
import Icebox from './Maps/Icebox/Icebox.js';
import Breeze from './Maps/Breeze/Breeze.js';
import Fracture from './Maps/Fracture/Fracture.js';
import Pearl from './Maps/Pearl/Pearl.js';
import Logs from './Logs/Logs.js';
import Faq from './FAQ/Faq.js';
import Default from './Default/Default.js'
function App() {
	return (
		<div className="App">
			<Router>

		
				<Switch>
					<Route path={'/'} exact component={Landing} />
					<Route path={'/bind'} component={Bind} />
					<Route path={'/haven'} component={Haven} />
					<Route path={'/split'} component={Split} />
					<Route path={'/ascent'} component={Ascent} />
					<Route path={'/icebox'} component={Icebox} />
					<Route path={'/breeze'} component={Breeze} />
					<Route path={'/fracture'} component={Fracture} />
					<Route path={'/pearl'} component={Pearl} />
					<Route path={'/logs'} component={Logs} />
					<Route path={'/faq'} component={Faq} />
					<Route component={Default}/>
				</Switch>
				</Router>
		</div>
	);
}

export default App;