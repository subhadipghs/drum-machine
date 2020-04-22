import {VOLUME} from './actionTypes';
export const change_volume = (vol) => {
	return {
		type: VOLUME,
		volume: vol
	};
}