import {BOX_DISPLAY} from './actionTypes';
export const change_display = (new_box_display) => {
	return {
		type: BOX_DISPLAY,
		box_display: new_box_display
	}
};