import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoryPage from '../views/CategoryPage.vue';
import SubCategory from '../views/SubCategory.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductsPageCat from '../views/ProductsPageCat.vue';
import ContactPage from '../views/ContactPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import CartPage from '../views/CartPage.vue';
import ProductPage from '../views/ProductPage.vue';
import CodCheckout from '../views/CodCheckout.vue';
import CheckoutPage from '../views/CheckoutPage.vue';
import OrderComplete from '../views/OrderComplete.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import BankakCheckout from '../views/BankakCheckout.vue';
import ChangePassword from '../views/ChangePassword.vue';
import LastOrders from '../views/LastOrders.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/CategoryPage',
		name: 'CategoryPage',
		component: CategoryPage,
	},
	{
		path: '/SubCategory/:type',
		name: 'SubCategory',
		component: SubCategory,
	},
	{
		path: '/ProductsPage',
		name: 'ProductsPage',
		component: ProductsPage,
	},
	{
		path: '/ProductsPage/:id',
		name: 'ProductsPageCat',
		component: ProductsPageCat,
	},
	{
		path: '/ProductPage/:id',
		component: ProductPage,
	},
	{
		path: '/ContactPage',
		name: 'ContactPage',
		component: ContactPage,
	},
	{
		path: '/ProfilePage',
		name: 'ProfilePage',
		component: ProfilePage,
	},
	{
		path: '/CartPage',
		name: 'CartPage',
		component: CartPage,
	},
	{
		path: '/CheckoutPage',
		name: 'CheckoutPage',
		component: CheckoutPage,
	},
	{
		path: '/CodCheckout',
		name: 'CodCheckout',
		component: CodCheckout,
	},
	{
		path: '/OrderComplete',
		name: 'OrderComplete',
		component: OrderComplete,
	},
	{
		path: '/LoginPage',
		name: 'LoginPage',
		component: LoginPage,
	},
	{
		path: '/RegisterPage',
		name: 'RegisterPage',
		component: RegisterPage,
	},
	{
		path: '/BankakCheckout',
		name: 'BankakCheckout',
		component: BankakCheckout,
	},
	{
		path: '/ChangePassword',
		name: 'ChangePassword',
		component: ChangePassword,
	},
	{
		path: '/LastOrders',
		name: 'LastOrders',
		component: LastOrders,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
