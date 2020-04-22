
import {POWER} from './actionTypes';
export const change_power = (power) => {
	return {
		type: POWER,
		power: !power
	}
};
