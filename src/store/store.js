import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


export const store = new Vuex.Store({
	state: {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	},
	getters: {
		getX: state => {
			return state.x;
		},
		getY: state => {
			return state.y;
		},
		getH: state => {
			return state.height;
		},
		getW: state => {
			return state.width;
		}
	},
	mutations: {
		setX: (state, { x }) => {
			state.x = x;
		},
		setY: (state, { y }) => {
			state.y = y;
		},
		setW: (state, { w }) => {
			state.width = w;
		},
		setH: (state, { h }) => {
			state.height = h;
		},
		test: state => {
			conole.log('testestestestestestestesetest');
		},
		update: (state, {x, y, height, width}) => {
			state.x = x;
			state.y = y;
			state.height = height;
			state.width = width;
		}
	}
});