import { createStore } from "vuex";
import categories from "./categories";
import products from "./products";
import users from "./users";
import deliveries from "./deliveries";
import orders from "./orders";
import ads from "./ads";

export default createStore({
  state: {
    reg:false,
    loader : true,
    checkoutComplete:{
      cart : [],
      details : {}
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    products,
    users,
    deliveries,
    orders,
    ads
  },
});
