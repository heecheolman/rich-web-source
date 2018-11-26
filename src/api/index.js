/* api/index.js

* 서버와 통신하는 가상의 메서드들

** 가상의 db
* userData.js : 로그인한 유저의 데이터
* chatFriendList.js : 채팅방 목록
* chatData.js : 채팅 데이터

** api
* fetchUserData()
  요청된 유저데이터를 가져온다.

* fetchFriendList()
  요청된 채팅방 목록을 가져온다.

* findChatData()
  상대방의 id 값을 받아 chatData 내에 일치하는 채팅데이터를 가져옴

* findOtherProfileImage()
  채팅방목록

*/

import userData from './userData';
import chatFriendList from './chatFriendList';
import chatData from './chatData';

export default {
  fetchUserData: () => userData,

  fetchFriendList: () => chatFriendList,

  findChatData: userId => chatData.find(room => room.userId === userId),

  findOtherProfileImage: selectId =>
    chatFriendList.find(friend => friend.id === selectId).imagePath,

  sendMessage: (otherId, messageToken) => {
    const completedToken = messageToken;

    if (!completedToken.id && !completedToken.created_at) {
      const messageId = chatData.find(room => room.userId === otherId).messages.length + 1;
      const timestamp = new Date().getTime();
      completedToken.id = messageId;
      completedToken.created_at = timestamp;
    }

    chatData.find(room => room.userId === otherId)
      .messages.push(completedToken);

    const findedFriend = chatFriendList.find(friend => friend.id === otherId);
    findedFriend.currentMessage = completedToken.message;
    findedFriend.currentTimestamp = completedToken.created_at;
  },
};
