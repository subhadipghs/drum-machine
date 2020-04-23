import {VOLUME, POWER, PADBANK, BOX_DISPLAY } from '../actions/actionTypes';

const initialState = {
	volume: 50,
	box_display: '',
	power: true,
	bank: 'one'
};


export default function reducers(state = initialState, action) {
	switch(action.type) {
		case VOLUME: 
			return Object.assign({}, state, {volume: action.volume});
		case POWER:
			return Object.assign({}, state, {power: action.power});
		case PADBANK:
			return Object.assign({}, state, {bank: action.padbank});
		case BOX_DISPLAY:
			return Object.assign({}, state, {box_display: action.box_display});
		default: 
			return state;
	}
}