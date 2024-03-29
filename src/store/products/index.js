import axios from "axios";

const state = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  empty: true,
  session_url: "https://admin.istanakado.com/api/v1/products",
};

const getters = {
  allProducts: (state) => {
    return state.products;
  },
  // all item in the cart
  allCart: (state) => {
    return state.cart;
  },
  // cart total price
  totalPrice(state) {
    let init = 0;
    // let cart = JSON.parse(localStorage.getItem("cart"));
    state.cart.forEach((item) => {
      init += parseFloat(item.buyPrice) * parseFloat(item.qty);
    });
    // localStorage.setItem("totalPrice", JSON.stringify(parseFloat(init)));
    return parseFloat(init);
  },
  // cart empty
  cartEmpty(state) {
    if (state.cart.length == 0) {
      state.empty = true;
    } else {
      state.empty = false;
    }
    return state.empty;
  },
};

const actions = {
  async fetchProducts({ commit, state }) {
    const token = localStorage.getItem("gift_user_token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const response = await axios.get(state.session_url, config);

    commit("setProducts", response.data);
  },
  // add to cart method
  addToCart(context, item) {
    context.commit("addItem", item);
  },
};

const mutations = {
  setProducts: (state, products) => {
    state.products = products;
  },
  newProduct: (state, product) => {
    state.products.unshift(product);
  },
  // add item to the cart
  addItem(state, item) {
    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
    let cart = JSON.parse(localStorage.getItem("cart"));
    let found = false;
    cart.forEach((product) => {
      if (product.id == item.id) {
        found = !found;
        product.qty++;
      }
    });
    if (!found) {
      cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = JSON.parse(localStorage.getItem("cart"));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
