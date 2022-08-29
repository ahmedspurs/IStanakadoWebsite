import axios from "axios";

const state = {
  ads: [],
  session_url: "https://admin.istanakado.com/api/v1/ads",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("userToken"),
    },
  },
};

const getters = {
  allAds: (state) => {
    return state.ads;
  },
};

const actions = {
  async fetchAds({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setAds", response.data);
  },

};

const mutations = {
  setAds: (state, ads) => {
    state.ads = ads;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
