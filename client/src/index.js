import React from "react";
import Router from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import { Home } from "./pages/Home";

import { NavMenu } from './components/NavMenu';
import { DisplayMapClass } from "./components/DisplayMapClass";

ReactDOM.render(
	<div id="page">
		<div id="header">
			<NavMenu />
			{console.log('it still works!')}
		</div>

		<Home />
	</div>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();