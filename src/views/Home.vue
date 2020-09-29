<template>
  <div>
    <div class="view-home">
      <div class="content">
        <div class="event-title">Home Page</div>
        <button @click="test">btn</button>
        <router-link to="/1">to Home1</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'Home',

  data() {
    return { ...process.env };
  },
  methods: {
    test() {
      // eslint-disable-next-line no-alert
      alert(111);
    },
  },
};
</script>

<style lang="scss" scoped>
.view-home {
  height: 100%;
  box-sizing: border-box;
  button {
    width: 200px;
    height: 200px;
  }
  a {
    color: red;
    border: 1px solid red;
  }
}
</style>
