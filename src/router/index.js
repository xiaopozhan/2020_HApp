import Vue from 'vue';
import VueRouter from 'vue-router';
import MSite from '../views/MSite/MSite.vue';
import Order from '../views/Order/Order.vue';
import Profile from '../views/Profile/Profile.vue';
import Search from '../views/Search/Search.vue';
import Message from '../views/Message/Message.vue';
import Login from '../views/Login/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    redirect:'/msite',
  },{
    path: '/msite',
    name: 'msite',
    component: MSite,
    meta:{
      FootFlag:true,
    }
  },{
    path:'/order',
    name:'order',
    component:Order,
    meta:{
      FootFlag:true,
    }
  },{
    path:'/profile',
    name:'profile',
    component:Profile,
    meta:{
      FootFlag:true,
    }
  },{
    path:'/message',
    name:'message',
    component:Message,
    meta:{
      FootFlag:true,
    }
  },{
    path:'/login',
    name:'login',
    component:Login,
  },{
    path:'/search',
    name:'search',
    component:Search,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
