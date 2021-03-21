import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import './styles/index.scss';
import { Home } from '@pages';
import { DialogContainer } from './context';

const rootElement = document.getElementById("app");
ReactDOM.render(
	<StrictMode>
		<DialogContainer>
			<Home />
		</DialogContainer>
	</StrictMode>,
	rootElement
);

