import React from "react";

import DrumMachine from "./components/drum-machine";
import BoxDisplayContainer from "./components/box-display";
import VolumeContainer from './components/volume';

import { connect } from "react-redux";
import { change_power } from "./redux/actions/power";
import "./App.scss";

function App(props) {
	return (
		<div className="App">
			<header className="App-header">Drum Machine</header>
			<div className="App-body">
				<VolumeContainer />
				<BoxDisplayContainer />
				<DrumMachine power={props.power} dispatch={props.dispatch}/>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		power: state.power,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		change_power: (state) => {
			dispatch(change_power(state.power));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
