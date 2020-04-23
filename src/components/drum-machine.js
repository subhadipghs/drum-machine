import React from "react";
import DrumPads  from "./drum-pad";
import './styles/drum-machine.scss';
import { bankOne, bankTwo } from "../constants/audio";

class DrumMachine extends React.Component {
	render() {
		return (
			<div id="drum-machine">
				{
					(this.props.bank === 'one')
					? bankOne.map((bank, index) => {
						return (
							<DrumPads
								name={bank.id}
								key={bank.id}
								src={bank.url}
								keyCode={bank.keyCode}
								power={this.props.power}
								keyTrigger={bank.keyTrigger}
								id={bank.keyTrigger}
								className="pads"
							/>
						);
					  })
					: bankTwo.map((bank, index) => {
							return (
								<DrumPads
									key={index}
									keyCode={bank.keyCode}
									name={bank.id}
									src={bank.url}
									power={this.props.power}
									id={bank.keyTrigger}
									keyTrigger={bank.keyTrigger}
									className="pads"
								/>
							);
					  })
				}
			</div>
		);
	}
}

export default DrumMachine;	