<template>
  <div id="app">
    <div class="main" v-if="isInitialized">
      <router-view />
    </div>
  </div>
</template>

<script>
// import { mapActions, mapState } from 'vuex';
// import { loadLocale } from './i18n';

export default {
  name: 'App',

  data() {
    return { isInitialized: false };
  },

  // computed: {
  //   ...mapState('Game', ['profile']),
  // },

  // methods: {
  //   ...mapActions('Game', ['getProfile']),
  // },

  async created() {
    // await loadLocale(process.env.LOCALE);
    this.isInitialized = true;
    // await this.getProfile();
  },
};
</script>

<style lang="scss">
#app {
  position: absolute;
  
  width: 100%;
  height: 100%;
  font-family: Roboto, Arial, Helvetica, 'Droid Sans';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;

  /* setup default font */
  @include withRegion('tw') {
    font-family: 'Noto Sans TC', Arial, Helvetica, 'Droid Sans', sans-serif;
  }
  @include withRegion('vn') {
    // TODO
  }
  @include withRegion('th') {
    // TODO
  }
}

.main {
  position: relative;
  @include alignCenter();

  /* setup layout size */
  width: 100%;
  height: 100%;
  background: white;
}
</style>
