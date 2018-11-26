<template>
  <div class="chat-list-page page">

    <div class="main-title-wrap">
      <div class="main-title">CHAT</div>
    </div>

    <div class="new-message-wrap">
      <div class="new-message">+ New Message</div>
    </div>

    <div class="room-lists-wrap">

      <room-list
        v-for="(room, index) in getFriendLists"
        :key="index"
        :room="room" />

    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';
import RoomList from './components/RoomList';

export default {
  name: 'ChatListPage',
  components: {
    RoomList,
  },

  async created() {
    await this.fetchFriendList();
  },

  computed: {
    ...mapGetters(['getFriendLists']),
  },

  methods: {
    ...mapActions(['fetchFriendList']),
  },
};
</script>
