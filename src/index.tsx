import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles/index.scss';
import { Home } from '@pages';

const rootElement = document.getElementById("app");
ReactDOM.render(
	<StrictMode>
		<Home />
	</StrictMode>,
	rootElement
);

