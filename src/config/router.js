/* router.js

* vue-router
* '/' 로 들어오는 경로는 ChatListPage 로 라우트
* '/room/:id' 로 들어오는 경로는 ChatRoomPage 로 라우트

* ChatRoomPage 로 라우트할 때 room 정보가 없다면 ChatList 로 redirect
* 정해진경로로 들어오지 않으면 기본경로 '/'로 redirect

*/

import Vue from 'vue';
import Router from 'vue-router';

import ChatListPage from '@/spa/ChatList/ChatListPage';
import ChatRoomPage from '@/spa/ChatRoom/ChatRoomPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatList',
      component: ChatListPage,
    },
    {
      path: '/room/:id',
      name: 'ChatRoom',
      component: ChatRoomPage,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.room) {
          next();
        } else {
          next({ name: 'ChatList' });
        }
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
