import React from "react";
import "./styles/drum-pad.scss";


import { connect } from "react-redux";
import { change_power } from "../redux/actions/power";
import { change_volume } from "../redux/actions/volume";
import { change_display } from "../redux/actions/box-display";
import { change_padbank } from "../redux/actions/banks";

class DrumPad extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			background: '#f349'
		};
		this.audioRef = React.createRef();
		this.play = this.play.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}


	componentWillMount() {
		const colors = ['#f39', '#3b27ba', '#13ca91'];
		var index = Math.floor(Math.random()*3);
		this.setState({
			background: colors[index]
		});
	}

	componentDidMount() {
		document.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}

	play() {		
		if (this.props.power) {
			this.audioRef.volume = parseFloat(this.props.volume/100);
			this.audioRef.play();
			this.props.change_display({type: 'BOX_DISPLAY', box_display: this.props.name});
		}
	}
	
	handleKeyPress(event) {
		if (event.keyCode === this.props.keyCode) {
			this.play();
		}
	}

	render() {
		return (
			<div className="drum-pad" style={{
				backgroundColor: this.state.background,
				boxShadow: `0px 0px 15px ${this.state.background}`
			}} onClick={this.play}>
				<audio
					className="clip"
					id={this.props.keyTrigger}
					src={this.props.src}
					ref={(audio) => {this.audioRef = audio}}
				/>
				<p className="text">{this.props.keyTrigger}</p>
			</div>
		);
	}
}



const mapStateToProps = (state) => {
	return {
		power: state.power,
		bank: state.bank,
		box_display: state.box_display,
		volume: state.volume,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		change_power: (state) => {
			dispatch(change_power(state.power));
		},
		change_volume: (state) => {
			dispatch(change_volume(state.volume));
		},
		change_display: (state) => {
			dispatch(change_display(state.box_display));
		},
		change_bank: (state) => {
			dispatch(change_padbank(state.bank));
		},
	};
};
const DrumPads = connect(mapStateToProps, mapDispatchToProps)(DrumPad);


export default DrumPads;