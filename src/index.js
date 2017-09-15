import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500, orangeA200, grey100, grey400, grey500 } from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const theme = getMuiTheme({
  palette: {
    primary1Color: cyan500,
    primary2Color: cyan500,
    primary3Color: grey400,
    accent1Color: orangeA200,
    accent2Color: grey100,
    accent3Color: grey500,
  },
  fontFamily: "Roboto, sans-serif"
})

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
		<App />
	</MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
