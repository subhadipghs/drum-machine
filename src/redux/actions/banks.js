import {PADBANK} from './actionTypes';
export const change_padbank = (padbank) => {
	return {
		type: PADBANK,
		bank: padbank
	};
}