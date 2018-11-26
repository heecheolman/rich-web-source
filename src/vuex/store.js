/* store.js

* state = {}
* friendList : 채팅방목록
* chatData : 채팅데이터
* myProfilePath: 내 프로필 사진 경로
* otherProfilePath: 상대팡 프로필 사진 경로
* typedMessage: 타이핑한 메세지
* messageToken: 서버로 보내질 메세지토큰
  * messageToken.message : 타입된 메세지가 저장
  * messageToken.isMe: 본인 여부 저장

*/


import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  friendList: [],
  chatData: {},
  myProfilePath: '',
  otherProfilePath: '',
  typedMessage: '',
  messageToken: {},
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
