<template>
  <router-link class="room-list-wrap flex-container flex-between-sort flex-row"
               tag="div"
               :to="{ name: 'ChatRoom', params: { id: room.id, room: room } }">

    <div class="profile-image-wrap">
      <img class="profile-image" :src="room.imagePath" alt="room-profile">
    </div>

    <div class="chat-preview-wrap flex-container flex-column">

      <div class="current-time-wrap">
        <span class="current-time">{{ currentTimestamp }}</span>
      </div>

      <div class="username-wrap">
        <span class="username">{{ room.username }}</span>
      </div>

      <div class="current-message-wrap flex-container flex-v-center">
        <span class="current-message">{{ room.currentMessage }}</span>
      </div>

    </div>
  </router-link>
</template>


<script>
import TimeParser from './../../../lib/TimeParser';

export default {
  name: 'RoomList',
  props: {
    room: {
      type: Object,
    },
  },
  computed: {
    currentTimestamp() {
      return TimeParser(this.room.currentTimestamp);
    },
  },
};
</script>
