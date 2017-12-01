import React from "react"

import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom'
import App from "../components/App";
import Home from "../components/Home";
import Baihuo from "../components/Baihuo";
import Cs from "../components/Cs";
import Shop from "../components/Shop";
import Tv from "../components/Tv";
import Search from "../components/Search";
import Weishang from "../components/Weishang";
import {Provider} from "react-redux";
import store from "../Redux/Store";

// import Nowplaying from "../components/Film/Nowplaying";
// import Comingsoon from "../components/Film/Comingsoon";
const router=(
	<Provider store={store}>
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/baihuo" component={Baihuo} />
				<Route path="/cs" component={Cs} />
				<Route path="/shop" component={Shop} />
				<Route path="/tv" component={Tv} />
				<Route path="/search" component={Search} />
				<Route path="/weishang" component={Weishang} />
				<Redirect from="*" to="/home"/>
			</Switch>
		</App>
	</Router>
	</Provider>
	)

export default router;
