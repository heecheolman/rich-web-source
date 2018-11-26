<template>
  <div id="app">
    <div class="wrap flex-container flex-center-sort">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  async created() {
    await this.$store.dispatch('fetchUserData');
  },
};
</script>
