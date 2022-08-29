import axios from 'axios';

const state = {
	categories: [],
	loadCat: false,
	status: '',
	session_url: 'https://admin.istanakado.com/api/v1/categories',
};

const getters = {
	allCategories: (state) => {
		return state.categories;
	},
	skelton: (state) => {
		if (state.categories.length > 0) {
			state.loadCat = true;
		} else {
			setTimeout(() => {
				if (state.categories.length > 0) {
					state.loadCat = true;
				} else {
					state.loadCat = false;
					actions.fetchCategories();
				}
			}, 5000);
		}
		return state.loadCat;
	},
};

const actions = {
	async fetchCategories({ commit, state }) {
		const token = localStorage.getItem('gift_user_token');
		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};
		const response = await axios.get(state.session_url,config);
		if (response.status == 200) {
			state.status = 200;
		} else {
			state.status = 404;
		}
		commit('setCategories', response.data);
	},
};

const mutations = {
	setCategories: (state, categories) => {
		state.categories = categories;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
