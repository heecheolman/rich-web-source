/* getters.js

* state 값을 return

* getFriendLists() : 방정보들을 return
* getChatMessages() : 채팅메세지들(log)을 return
* getRoomName() : 방이름을 return
* getTypedMessage() : 입력된 메세지 return
* getOtherProfilePath() : 상대방 프로필사진경로 return
* getMyProfilePath() : 내 프로필사진경로 return

*/

export default {
  getFriendLists: state => state.friendList,
  getChatMessages: state => state.chatData.messages,
  getRoomName: state => state.chatData.roomName,
  getTypedMessage: state => state.typedMessage,
  getOtherProfilePath: state => state.otherProfilePath,
  getMyProfilePath: state => state.myProfilePath,
};
