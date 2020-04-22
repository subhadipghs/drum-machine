import React from "react";
import "./styles/drum-pad.scss";


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
		const colors = ['#f39', '#652ec7', '#3b27ba'];
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
			this.audioRef.play();
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
export default DrumPad;