import React from 'react'
import './styles/box-display.scss';

import {connect} from 'react-redux';




class BoxDisplay extends React.Component {
	render() {
		return (
			<div className="box-display">
				{this.props.box_display}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		box_display: state.box_display,
	}
}


const BoxDisplayContainer = connect(mapStateToProps)(BoxDisplay);

export default BoxDisplayContainer;