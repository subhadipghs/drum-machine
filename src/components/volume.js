import React from 'react'
import {connect} from 'react-redux';

import {change_volume} from '../redux/actions/volume';
import {VOLUME} from '../redux/actions/actionTypes';

class Volume extends React.Component {
	
	constructor(props) {
		super(props);
		this.setVolume = this.setVolume.bind(this); 
	}

	setVolume(e) {
		console.log(e.target.value);
		this.props.change_volume({type: VOLUME, volume: e.target.value});
	}

	render() {
		return (
			<React.Fragment>
				<input 
					type="range" 
					value={this.props.volume}
					onChange={this.setVolume}
				/>

				<p style={{color: 'white'}}>Volume: {this.props.volume}</p>
			</React.Fragment>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		volume: state.volume
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		change_volume: (state) => {
			return dispatch(change_volume(state.volume));
		}
	};
};

const VolumeContainer = connect(mapStateToProps, mapDispatchToProps)(Volume);


export default VolumeContainer;