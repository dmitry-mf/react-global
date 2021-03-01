import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import cn from "classnames/bind";
import styles from './styles/_common.scss';
import './styles/index.scss';

const cx = cn.bind(styles);

const rootElement = document.getElementById("app");
ReactDOM.render(
	<StrictMode>
		<>
			<h1 className={cx('test')}>Hello!</h1>
		</>
	</StrictMode>,
	rootElement
);

