import React, { StrictMode } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
  } from "react-router-dom";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom";
import './styles/index.scss';
import { Home, NotFound } from '@pages';
import { DialogContainer } from './context';
import { configureStore } from './store';

const rootElement = document.getElementById("app");
const store = configureStore();

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<DialogContainer>
				<Router>
					<Switch>
						<Route path="/:id" component={Home} />
						<Route exact path="/" component={Home} />
						<Route path="*" component={NotFound} />
					</Switch>
				</Router>
			</DialogContainer>
		</Provider>
	</StrictMode>,
	rootElement
);

