import React, { StrictMode } from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import './styles/index.scss';
import { Home } from '@pages';
import { DialogContainer } from './context';
import { configureStore } from './store';

const rootElement = document.getElementById("app");
const store = configureStore();

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<DialogContainer>
				<Home />
			</DialogContainer>
		</Provider>
	</StrictMode>,
	rootElement
);

