<template>
  <div>
    <div class="view-home">
      <div class="content">
        <div class="event-title">Home1111</div>
        <router-link to="/">to Home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
  name: 'Home1',

  data() {
    return { ...process.env };
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
