<template>
  <div class="home">
    <div class="bannerbox">
      <div class="searchbox">
        <form action="/">
          <van-search
            v-model="searchValu"
            show-action
            background=""
            placeholder="请输入商品名称"
            @search="onSearch"
          >
            <div slot="action" @click="onSearch">
              <div class="searchbtn">搜索</div>
            </div>
          </van-search>
        </form>
      </div>
      <div class="banner-back" v-for="(item,index) in bannerItems" :key="index" v-show="index === bannerItemsIndex">
        <img :src="item">
      </div>
      <div class="home-main-content">
        <van-swipe :autoplay="5000" @change="bannerChange">
          <van-swipe-item v-for="(item,index) in bannerItems" :key="index">
            <div class="banner-item">
              <div class="img-box">
                <img :src="item">
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
        <div class="banner-bottom">
          <van-row>
            <van-col span="8" v-for="item in tipItems" :key="item.id">
              <div class="bottom-item">
                <i :class="item.ico"></i>
                <span>{{ item.title }}</span>
              </div>
            </van-col>
          </van-row>
        </div>
        <!--<div class="title-type">-->
        <!--<span class="text">每日特辑</span>-->
        <!--<span class="des">SPECIAL ALBUM</span>-->
        <!--</div>-->
        <div class="home-item" v-for="n in 5" :key="n.id">
          <div class="content">
            <div class="header">
              <img src="../../assets/images/home1.jpg">
            </div>
            <div class="goods-box">
              <van-row gutter="20">
                <van-col span="8" v-for="n in 6" :key="n.id">
                  <div class="goods-item">
                    <img src="../../assets/images/pro1.jpg">
                    <div class="title">百威啤酒330ml(六入)330ml*6</div>
                    <div class="money"><em>￥</em>10</div>
                    <div class="buy">+ 购物车</div>
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      searchValu: '',
      bannerItems: {
        '0': require('@/assets/images/banner1.jpg'),
        '1': require('@/assets/images/banner2.jpg'),
        '2': require('@/assets/images/banner3.jpg'),
        '3': require('@/assets/images/banner4.jpg'),
        '4': require('@/assets/images/banner5.jpg')
      },
      bannerItemsIndex: '0',
      tipItems: [
        {ico: 'iconfont icon-shuye', title: '新鲜食材'},
        {ico: 'iconfont icon-lightning', title: '快速送达'},
        {ico: 'iconfont icon-huodongzhongxin', title: '优惠多多'}
      ]
    }
  },
  computed: {

  },
  methods: {
    onSearch () {
      alert('搜索')
      console.log(this.searchValu)
    },
    onCancel () {
      alert('键盘')
    },
    bannerChange (index) {
      console.log(typeof (index)) // index 为数字类型
      this.bannerItemsIndex = index + '' // 两者相等要转成同类型
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .searchbox {
    /*position: absolute;*/
    width: 100%;
    /*z-index: 99;*/
    padding-top: 4px;
    .searchbtn {
      width: 50px;
      text-align: center;
      color: #fff;
    }
  }
  .bannerbox {
    /*position: relative;*/
    .banner-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 22%;
      overflow: hidden;
      z-index: -1;
      img {
        width: 120%;
        height: 110%;
        filter: blur(8px);
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .banner-item {
      padding: 0px 12px 0;
      position: relative;
      .img-box {
        border-radius: 5px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
  .home-main-content {
    position: fixed;
    top: 50px;
    bottom: 50px;
    width: 100%;
  }
  .banner-bottom {
    text-align: center;
    font-size: 12px;
    padding: 10px 10px;
    color: rgb(51, 51, 51);
    font-weight: 200;
  }
  .title-type {
    height: 18px;
    padding: 16px 15px 6px;
    background-color: rgb(244, 244, 244);
    .text {
      margin-right: 8px;
      color: rgb(51, 51, 51);
      font-size: 18px;
      font-weight: 700;
    }
    .des {
      font-size: 12px;
      color: rgb(153, 153, 153);
    }
  }
  .home-item {
    padding: 6px 6px 0;
    background-color: rgb(244, 244, 244);
    .content {
      width: 100%;
      border-radius: 5px;
      background-color: #fff;
      overflow: hidden;
      .header {
        img {
          display: block;
          width: 100%;
        }
      }
      .goods-box {
        padding: 0.5px 10.5px 10px;
        .goods-item {
          img {
            width: 100%;
            display: block;
          }
          .title {
            max-height: 20px;
            line-height: 16px;
            font-size: 12px;
            color: #333333;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .money {
            font-size: 16px;
            text-align: center;
            padding: 5px 0;
            color: #FF9800;
            font-weight: bold;
            em {
              font-size: 10px;
              font-style: normal;
              font-weight: normal;
            }
          }
          .buy {
            width: 80%;
            margin: 0 auto;
            height: 22px;
            line-height: 24px;
            padding: 0 12px;
            box-sizing: border-box;
            border-radius: 12px;
            font-size: 10px;
            text-align: center;
            color: #fff;
            background: rgb(253, 101, 0);
          }
        }
      }
    }
  }
}
</style>
