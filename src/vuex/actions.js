/* actions.js

* vuex 의 action
* 가상 서버의 메서드가 담겨있는 api/index.js 를 통해 통신

* fetchUserData()
  로그인을 할 시 유저의 데이터를 가져옴

* fetchFriendList()
  유저의 채팅방 목록들을 가져옴
  채팅방목록에서 최근 메세지 순서로 정렬하여 최근메세지가 가장 상단에 보이도록 정렬

* fetchChatData()
  상대방의 id 값을 받아 api 요청을 해서 상대방과의 chatData 를 가져옴
  상대방의 프로필사진도 가져옴
  만약 상대방의 프로필사진이 없다면 기본 프로필사진으로 등록

* sendMessage()
  메세지를 보내는 함수
  상대방의 id를 받아서 '입력된메세지' 와 '본인여부' 값을 갖는 messageToken 생성
  미완성된 메세지토큰을 api.sendMessage() 에 전달
  전송이 완료된 후 유저의 input 을 초기화시켜준다.

*/


import * as types from './mutation_types';
import api from './../api';

export default {
  fetchUserData: ({ commit }) => {
    const userData = api.fetchUserData();
    commit(types.FETCH_MY_PROFILE, userData.imagePath);
  },
  fetchFriendList: ({ commit }) => {
    const friendLists = api.fetchFriendList();
    commit(types.FETCH_FRIEND_LIST, friendLists);

    friendLists.sort((friend1, friend2) => {
      const ts1 = parseInt(friend1.currentTimestamp, 10);
      const ts2 = parseInt(friend2.currentTimestamp, 10);
      if (ts1 > ts2) {
        return -1;
      } else if (ts1 < ts2) {
        return 1;
      }
      return 0;
    });
  },

  fetchChatData: ({ commit }, id) => {
    const findedChatData = api.findChatData(id);
    const otherProfilePath = api.findOtherProfileImage(id);

    if (findedChatData && otherProfilePath) {
      commit(types.FETCH_CHAT_DATA, findedChatData);
      commit(types.FETCH_OTHER_PROFILE, otherProfilePath);
    } else {
      commit(types.FETCH_CHAT_DATA, {});
      commit(types.FETCH_OTHER_PROFILE, 'https://pbs.twimg.com/profile_images/781723975747448836/9RQbatqK_400x400.jpg');
    }
  },

  sendMessage: ({ commit, state }, otherId) => {
    commit(types.CREATE_MESSAGE_TOKEN);
    api.sendMessage(otherId, state.messageToken);
    commit(types.CLEAR_TEXT_INPUT_AREA);
  },
};
