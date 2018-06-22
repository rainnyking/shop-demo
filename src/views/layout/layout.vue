<template>
  <div class="wap">
    <router-view></router-view>
    <van-tabbar v-model="menuActive">
      <van-tabbar-item icon="home" to="/home" replace>首页</van-tabbar-item>
      <van-tabbar-item icon="more-o" to="/class" replace>分类</van-tabbar-item>
      <van-tabbar-item icon="cart" to="/cart" replace>购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mine" replace>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data () {
    return {
      menuActive: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.wap {
  .van-tabbar-item--active {
    color: #FF9800;
  }
}
</style>
