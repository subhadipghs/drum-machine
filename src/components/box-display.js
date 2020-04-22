import React from 'react'
import './styles/box-display.scss';
class BoxDisplay extends React.Component {
	render() {
		return (
			<div className="box-display">
				{this.props.box_display}
				DISPLAY
			</div>
		)
	}
}

export default BoxDisplay