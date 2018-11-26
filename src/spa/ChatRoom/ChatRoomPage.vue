<template>
  <div class="chat-room-page page flex-container flex-column flex-between-sort">
    <div class="room-header__section flex-container flex-row flex-between-sort">

      <div class="back-button-wrap flex-container flex-center-sort">
        <router-link
          :to="{ name: 'ChatList' }"
          tag="button"
          class="back-button">
          뒤로
        </router-link>
      </div>

      <div class="room-title">
        {{ getRoomName }}
      </div>

      <div class="blank"></div>

    </div>

    <div class="room-contents__section" ref="contents">

      <chat-message
        v-for="(message, index) in getChatMessages"
        :key="index"
        :message-data="message" />

    </div>

    <div class="room-send-box__section flex-container flex-row flex-between-sort">

      <label for="input-area">
        <input
          id="input-area"
          type="text"
          @input="typing"
          @keyup.enter="sendText"
          :placeholder="placeholder"
          :value="getTypedMessage">
      </label>

      <div class="send-button-wrap flex-container flex-center-sort">
        <button class="send-button"
                :class="{ 'abled': canSend, 'disabled': !canSend }"
                :disabled="!canSend"
                @click="sendText">보내기</button>
      </div>

    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import ChatMessage from './components/ChatMessage';

export default {
  name: 'ChatRoomPage',
  components: {
    ChatMessage,
  },
  props: {
    id: {
      type: Number,
    },
    room: {
      type: Object,
    },
  },
  async created() {
    await this.fetchChatData(this.id);
    this.autoScroll();
  },
  updated() {
    this.autoScroll();
  },
  computed: {
    ...mapGetters([
      'getRoomName',
      'getChatMessages',
      'getTypedMessage',
    ]),
    canSend() {
      return this.getTypedMessage.replace(/(^\s*) | (\s*$)/gi, '');
    },
  },
  data() {
    return {
      placeholder: 'Type something to send...',
    };
  },
  methods: {
    fetchChatData(otherId) {
      this.$store.dispatch('fetchChatData', otherId);
    },

    typing(e) {
      this.$store.commit('UPDATE_TYPED_TEXT', e.target.value);
    },

    sendText() {
      if (this.canSend) {
        this.$store.dispatch('sendMessage', this.id);
      }
    },
    autoScroll() {
      this.$refs.contents.scrollTop = this.$refs.contents.scrollHeight;
    },
  },
};
</script>
