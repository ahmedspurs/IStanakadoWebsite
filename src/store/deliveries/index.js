import axios from 'axios';

const state = {
	deliveries: [],
	session_url: 'https://admin.istanakado.com/api/v1/deliveries',
};

const getters = {
	allDeliveries: (state) => {
		return state.deliveries;
	},
};

const actions = {
	async fetchDeliveries({ commit, state }) {
		const token = localStorage.getItem('gift_user_token');
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const response = await axios.get(state.session_url,config);
		commit('setDeliveries', response.data);
	},

};

const mutations = {
	setDeliveries: (state, deliveries) => {
		state.deliveries = deliveries;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
