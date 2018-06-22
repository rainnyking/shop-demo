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
      <div class="banner-back" v-for="(item,index) in seller.banner" :key="index" v-show="index === bannerItemsIndex">
        <img :src="item">
      </div>
    </div>
    <div class="home-main-content" ref="homeGoods">
      <div class="content-ul">
        <div class="newbanner">
          <van-swipe :autoplay="5000" @change="bannerChange">
            <van-swipe-item v-for="(item,index) in seller.banner" :key="index">
              <div class="banner-item">
                <div class="img-box">
                  <img :src="item">
                </div>
              </div>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="banner-bottom" :class="{active:searchBoxBg}">
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
        <div class="pro-home">
          <div class="home-item" v-for="(item, index) in goods" :key="index">
            <div class="content">
              <div class="header">
                <img :src="item.img">
              </div>
              <div class="goods-box">
                <van-row gutter="20">
                  <van-col span="8" v-for="food in item.foods" :key="food.id">
                    <div class="goods-item">
                      <div class="foods-img-box">
                        <img :src="food.icon">
                      </div>
                      <div class="title">{{food.name}}</div>
                      <div class="money"><em>￥</em>{{food.price}}<em>/{{food.unit}}</em></div>
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
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { getDataGoodsApi } from '@/utils/api'
export default {
  name: 'home',
  data () {
    return {
      searchValu: '',
      seller: {},
      goods: [],
      bannerItemsIndex: 0,
      tipItems: [
        {ico: 'iconfont icon-shuye', title: '新鲜食材'},
        {ico: 'iconfont icon-lightning', title: '快速送达'},
        {ico: 'iconfont icon-huodongzhongxin', title: '优惠多多'}
      ],
      scrollY: ''
    }
  },
  mounted () {
    this.getData()
  },
  computed: {
    searchBoxBg () {
      if (this.scrollY < -40) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    onSearch () {
      alert('搜索')
      console.log(this.searchValu)
    },
    onCancel () {
      alert('键盘')
    },
    getData () {
      getDataGoodsApi().then(res => {
        res = res.data
        console.log(res)
        this.seller = res.seller
        this.goods = res.goods
        console.log(res.goods)
        this.$nextTick(() => {
          this._initScroll()
        })
      }, res => {
        console.info('调用失败')
      })
    },
    _initScroll () {
      this.goodsScroll = new BScroll(this.$refs.homeGoods, {
        click: true,
        // wheelWrapperClass: true,
        probeType: 3
      })
      let _this = this
      this.goodsScroll.on('scroll', function (pos) {
        _this.scrollY = Math.round(pos.y)
      })
    },
    bannerChange (index) {
      console.log(typeof (index)) // index 为数字类型
      this.bannerItemsIndex = index// 两者相等要转成同类型
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .bannerbox {
    /*position: relative;*/
    .searchbox {
      position: relative;
      width: 100%;
      z-index: 99;
      .searchbtn {
        width: 50px;
        text-align: center;
        color: #fff;
      }
      &.active {
        /*background-color: #ff7b00;*/
      }
    }
    .banner-back {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 26%;
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
  .home-main-content {
    position: absolute;
    top: 46px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
  }
  .banner-bottom {
    text-align: center;
    font-size: 12px;
    padding: 10px 10px;
    color: rgb(51, 51, 51);
    font-weight: 200;
    &.active {
      color: #fff;
    }
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
          .foods-img-box {
            padding: 8px;
            img {
              width: 100%;
              display: block;
            }
          }
          .title {
            max-height: 20px;
            line-height: 16px;
            font-size: 12px;
            color: #333333;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .money {
            font-size: 16px;
            text-align: center;
            padding: 8px 0;
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
    &:last-child{
      padding-bottom: 6px;
    }
  }
}
</style>
