import axios from "axios";

const state = {
  users: [],
  user: {},
  msg: "",
  editeProfile: false,
  session_url: "http://localhost:5000/api/v1/users",
  login_url: "http://localhost:5000/api/v1/auth/login",
  token: null,
};

const getters = {
  allUsers: (state) => {
    return state.users;
  },
  user: (state) => {
    return state.user;
  },
  updateMessage: (state) => {
    return state.msg;
  },
};

const actions = {
  async login({ commit, state }, user) {
    try {
      const response = await axios.post(state.login_url, user);
      console.log("success");
      localStorage.setItem("gift_user_token", response.data.token);
      commit("loginUser", response.data);
    } catch (err) {
      commit("loginUser", err.response.data);
    }
  },
  async fetchUsers({ commit, state }) {
    const token = localStorage.getItem("gift_user_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(state.session_url, config);
    commit("setUsers", response.data);
  },
  async addUser({ commit, state }, user) {
    const response = await axios.post(state.session_url, user);
    commit("newUser", response.data);
  },
  async updateUser({ commit, state }, payload) {
    const { id, user } = payload;
    console.log(user.userName);
    console.log(user.role);
    const token = localStorage.getItem("gift_user_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.put(`${state.session_url}/${id}`, user, config);
    state.msg = res.data.success;
    state.users.forEach((el) => {
      if (el.id == id) {
        el.email = user.email;
        el.city = user.city;
        el.tel = user.tel;
        el.userName = user.userName;
        el.adress = user.adress;
      }
    });
    commit("editUser");
  },
  async getUser({ state }) {
    const token = localStorage.getItem("gift_user_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const res = await axios.get("http://localhost:5000/api/v1/auth/me", config);
    state.user = res.data.data;
  },
};

const mutations = {
  setUsers: (state, users) => {
    state.users = users;
  },
  newUser: (state, user) => {
    state.users.unshift(user);
  },
  loginUser: (state, user) => {
    if (user.success == true) {
      state.token = user.token;
    } else {
      console.log(user.success);
    }
  },
  editUser: (state) => {
    console.log(state.users);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
