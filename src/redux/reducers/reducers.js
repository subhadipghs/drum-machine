import {VOLUME, POWER, PADBANK, BOX_DISPLAY } from '../actions/actionTypes';

const initialState = {
	volume: 100,
	box_display: '',
	power: true,
	bank: 'one'
};


export default function reducers(state = initialState, action) {
	switch(action.type) {
		case VOLUME: 
			return [
				...state,
				{ volume: action.volume }
			];
		case POWER:
			return [
				...state,
				{ power: action.power }
			];
		case PADBANK:
			return [
				...state,
				{ bank: action.bank }
			];
		case BOX_DISPLAY:
			return [
				...state,
				{ box_display: action.box_display } 
			];
		default: 
			return state;
	}
}