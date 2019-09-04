<template>
  <div class="main">
    <img src="@/assets/logo.png" />
    <div>
      <input v-model="name" placeholder="输入姓名" />
      <button @click="into">进入</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      name: ""
    };
  },
  components: {},
  methods: {
    into: function() {
      this.$router.push({
        name: "Todo",
        params: {
          name: this.name
        }
      });
    }
  }
};
</script>

<style scoped>
</style>
