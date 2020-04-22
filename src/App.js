import React from "react";

import DrumMachine from './components/drum-machine';
import BoxDisplay from './components/box-display';


import {connect} from 'react-redux';
import {change_power} from './redux/actions/power';
import {change_volume} from './redux/actions/volume';
import {change_display} from './redux/actions/box-display';
import {change_padbank} from './redux/actions/banks';

import "./App.scss";

function App({power, volume, bank, box_display}) {
	return (
		<div className="App">
			<header className="App-header">Drum Machine</header>
			<div className="App-body">
				<BoxDisplay power={power} display={box_display}/>
				<DrumMachine power={power} />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		power: state.power,
		bank: state.bank, 
		box_display: state.box_display,
		volume: state.volume
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		change_power: (state) => {
			dispatch(change_power(state))
		}, 
		change_volume: (state) => {
			dispatch(change_volume(state));
		},
		change_display: (state) => {
			dispatch(change_display(state))
		},
		change_bank: (state) => {
			dispatch(change_padbank(state));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
