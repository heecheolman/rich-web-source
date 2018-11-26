<template>
  <div class="chit-chat-wrap flex-container" :class="align">

    <div class="profile-icon-wrap"
         :class="messageData.isMe ? 'profile-align-right' : 'profile-align-left'">
      <img
              class="profile-icon"
              :src="messageData.isMe
        ? getMyProfilePath
        : getOtherProfilePath"
              alt="profile-icon">
    </div>

      <div class="message-box">
        <p class="message-text">{{ messageData.message }}</p>
      </div>

    <div class="timestamp-wrap flex-align-bottom">
      <span class="timestamp">{{ getTimestamp }}</span>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TimeParser from './../../../lib/TimeParser';

export default {
  name: 'ChatMessage',
  props: {
    messageData: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters([
      'getOtherProfilePath',
      'getMyProfilePath',
    ]),
    align() {
      return {
        'flex-align-left': !this.messageData.isMe,
        'flex-align-right': this.messageData.isMe,
      };
    },
    getTimestamp() {
      return TimeParser(this.messageData.created_at);
    },
  },
};
</script>
