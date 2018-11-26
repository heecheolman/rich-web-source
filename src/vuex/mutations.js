/* mutations.js

* state 상태를 변경하는 commit 들 정의

* FETCH_FRIEND_LIST
  채팅방 목록 저장

* FETCH_CHAT_DATA
  채팅데이터 저장

* FETCH_MY_PROFILE
  내 프로필 저장

* FETCH_OTHER_PROFILE
  상대방 프로필 저장

* UPDATE_TYPED_TEXT
  유저가 입력한 텍스트를 받아와 저장

* CLEAR_TEXT_INPUT_AREA
  메세지 전송이 끝난 후 state 에 타이핑한 메세지를 초기화

* CREATE_MESSAGE_TOKEN
  메세지 전송이벤트가 들어올시 서버로 보내질 메세지 토큰을 생성

*/

import * as types from './mutation_types';

export default {
  [types.FETCH_FRIEND_LIST](state, lists) {
    state.friendList = lists;
  },

  [types.FETCH_CHAT_DATA](state, chatData) {
    state.chatData = chatData;
  },

  [types.FETCH_MY_PROFILE](state, profilePath) {
    state.myProfilePath = profilePath;
  },

  [types.FETCH_OTHER_PROFILE](state, profilePath) {
    state.otherProfilePath = profilePath;
  },

  [types.UPDATE_TYPED_TEXT](state, letter) {
    state.typedMessage = letter;
  },

  [types.CLEAR_TEXT_INPUT_AREA](state) {
    state.typedMessage = '';
  },

  [types.CREATE_MESSAGE_TOKEN](state) {
    state.messageToken = {
      isMe: true,
      message: state.typedMessage,
    };
  },
};
