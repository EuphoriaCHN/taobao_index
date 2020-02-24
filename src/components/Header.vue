<template>
  <header class="header">
    <div class="container clear-fix">
      <ul class="header-left clear-fix">
        <li class="site-header-menu">
          <div class="header-menu">
            中国大陆<span class="site-nav-icon"></span>
            <div class="site-header-switch">
              <ul>
                <li v-for="(value, index) in siteHeaderSwitch" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu">
            <a href="#" @click.prevent class="site-header-sign">亲，请登录</a>
            <a href="#" @click.prevent>免费注册</a>
          </div>
        </li>
        <li>
          <div class="header-menu taobao-on-phone">
            <a href="#" @click.prevent>手机逛淘宝</a>
          </div>
        </li>
      </ul>
      <ul class="header-right clear-fix">
        <li>
          <div class="header-menu my-taobao has-drop-bar">
            <a href="#" @clic.prevent>我的淘宝</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in myTaoBao" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu">
            <i class="shopping-car"></i>
            <a href="#" @clic.prevent>购物车</a>
            <i class="more-arrow"></i>
          </div>
        </li>
        <li>
          <div class="header-menu has-drop-bar">
            <i class="favourite-card"></i>
            <a href="#" @clic.prevent>收藏夹</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in favouriteCard" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu category">
            <a href="#" @click.prevent>商品分类</a>
          </div>
        </li>
        <li>
          <div class="header-menu line">
            <span class="line" style="color: #dddddd">|</span>
          </div>
        </li>
        <li>
          <div class="header-menu qn has-drop-bar">
            <a href="#" @click.prevent>千牛卖家中心</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in qn" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu call-server has-drop-bar">
            <a href="#" @click.prevent>联系客服</a>
            <i class="more-arrow"></i>
            <div class="nav-header-drop-bar">
              <ul>
                <li v-for="(value, index) in callServer" :key="index" v-text="value"></li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div class="header-menu web-tag">
            <i class="web-list"></i>
            <a href="#" @click.prevent>网站导航</a>
            <i class="more-arrow"></i>
            
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        siteHeaderSwitch: ['全部', '中国大陆', '中国香港', '中国澳门', '韩国', '马来西亚', '澳大利亚', '新加坡', '新西兰', '加拿大', '日本'],
        myTaoBao: ['已买到的宝贝', '我的足迹'],
        favouriteCard: ['收藏的宝贝', '收藏的店铺'],
        qn: ['免费开店', '已卖出的宝贝', '出售中的宝贝', '卖家服务市场', '卖家培训中心', '体检中心', '问商友'],
        callServer: ['消费者客服', '卖家客服'],
      };
    }
  }
</script>

<style scoped>

</style>
