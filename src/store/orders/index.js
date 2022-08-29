import axios from 'axios';

const state = {
	orders: [],

	session_url: 'https://admin.istanakado.com/api/v1/orders',
};

const getters = {
	allOrders: (state) => {
		return state.orders;
	},
};

const actions = {
	async fetchOrders({ commit, state }) {
		const token = localStorage.getItem('gift_user_token');
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const response = await axios.get(state.session_url,config);
		commit('setOrders', response.data);
	},
};

const mutations = {
	setOrders: (state, orders) => {
		state.orders = orders;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
