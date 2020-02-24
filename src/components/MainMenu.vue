<template>
  <div class="main-menu">
    <div class="container">
      <div class="display-dist">
        <section class="menu-list">
          <ul>
            <li
              v-for="(value, index) in menuList"
              :key="index"
            >
              <a href="#" v-text="value[0]"></a>
              <span>/</span>
              <a href="#" v-text="value[1]"></a>
              <span>/</span>
              <a href="#" v-text="value[2]"></a>
            </li>
          </ul>
        </section>
        <div class="goods-show">
          <div class="rotation-charts">
            <div class="adv-rotation">
              <ul>
                <li
                  v-for="(value, index) in advRotation"
                  :key="index"
                >
                  <a href="#"><img :src="value" alt="" /></a>
                </li>
              </ul>
            </div>
            <div class="tmall-rotation">
              <div class="tmall-title">
                <span>
                  <img src="../assets/images/tmall.png" alt="">
                </span>
                <em>理想生活上天猫</em>
              </div>
              <div class="tmall-images">
                <ul class="process-bar">
                  <li></li>
                </ul>
                <ul class="images-rotation">
                  <li class="many-images">
                    <ul class="clear-fix">
                      <li
                        v-for="(value, index) in manyImages"
                        :key="index"
                      >
                        <a href="#"><img :src="value" alt="" /></a>
                      </li>
                    </ul>
                  </li>
<!--                  <li-->
<!--                    class="two-images"-->
<!--                    v-for="(value, index) in tmallGoodsShow"-->
<!--                    :key="index"-->
<!--                  >-->
<!--                    <img :src="value[0]" alt="" />-->
<!--                    <img :src="value[1]" alt="" />-->
<!--                  </li>-->
                </ul>
              </div>
            </div>
          </div>
          <div class="media-control">
            <div class="top">
              <img src="../assets/images/50307-0-lubanu.jpg_290x290q90.jpg" alt="">
            </div>
            <div class="bottom">
              <h5>今日特卖</h5>
              <img src="../assets/images/TB1j4LLKpXXXXcbaXXXSutbFXXX.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="login-and-more">

      </div>
    </div>
  </div>
</template>

<script>
  import '@/assets/styles/mainmenu.less';

  export default {
    name: "MainMenu",
    data() {
      return {
        menuList: [
          ['女装', '男装', '内衣'],
          ['鞋靴', '箱包', '配件'],
          ['童装玩具', '孕产', '用品'],
          ['家电', '数码', '手机'],
          ['美妆', '洗护', '保健品'],
          ['珠宝', '眼镜', '手表'],
          ['运动', '户外', '乐器'],
          ['游戏', '动漫', '影视'],
          ['美食', '生鲜', '零食'],
          ['鲜花', '宠物', '农资'],
          ['面料集采', '装修', '建材'],
          ['家具', '家饰', '家纺'],
          ['汽车', '二手车', '用品'],
          ['办公', 'DIY', '五金电子'],
          ['百货', '餐厨', '家庭保健'],
          ['学习', '卡券', '本地服务']
        ],
        advRotation: [
          require('../assets/images/TB16LA.vHr1gK0jSZFDXXb9yVXa-520-280.jpg'),
          require('../assets/images/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg'),
          require('../assets/images/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg'),
          require('../assets/images/TB183NQapLM8KJjSZFBSutJHVXa.jpg'),
          require('../assets/images/TB13hj2v.H1gK0jSZSyXXXtlpXa-520-280.jpg'),
        ],
        manyImages: [
          require('../assets/images/manyImages/TB1D0sLnHSYBuNjSspiXXXNzpXa.png'),
          require('../assets/images/manyImages/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1a3bVRXXXXXbfXFXXXXXXXXXX.png'),
          require('../assets/images/manyImages/TB1gD8NhDlYBeNjSszcXXbwhFXa.png'),
          require('../assets/images/manyImages/TB1_aF7pG6qK1RjSZFmXXX0PFXa.png'),
          require('../assets/images/manyImages/TB12cBSirGYBuNjy0FoXXciBFXa.png'),
          require('../assets/images/manyImages/TB1Im97lVT7gK0jSZFpXXaTkpXa.png'),
          require('../assets/images/manyImages/928417138.png_90x90q90.png'),
          require('../assets/images/manyImages/TB1KH4GQpXXXXb_apXXSutbFXXX.jpg_90x90q90.jpg'),
          require('../assets/images/manyImages/TB1_kq7j1SSBuNjy0FlXXbBpVXa.png'),
          require('../assets/images/manyImages/TB1nJxqJXXXXXchapXXSutbFXXX.jpg_90x90q90.jpg'),
        ],
        tmallGoodsShow: [
          [
            require('../assets/images/TB1X6uHLVXXXXcCXVXXSutbFXXX.jpg'),
            require('../assets/images/TB13xKuLVXXXXcHapXXSutbFXXX.jpg')
          ],
          [
            require('../assets/images/TB1KiIrqhD1gK0jSZFsSuvldVXa.jpg_240x240q90.jpg'),
            require('../assets/images/TB1NuT0seH2gK0jSZJnSuuT1FXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB1tBJNvxv1gK0jSZFFwu20sXXa.png_240x240q90.png'),
            require('../assets/images/TB1iT.iuhD1gK0jSZFKSuwJrVXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB19gsVtWL7gK0jSZFBSutZZpXa.jpg_240x240q90.jpg'),
            require('../assets/images/TB1tBMFukP2gK0jSZPxSuucQpXa.jpg_240x240q90.jpg')
          ],
          [
            require('../assets/images/TB1jq1HekvoK1RjSZPfXXXPKFXa-502-380.jpg_240x240q90.jpg'),
            require('../assets/images/TB1NASFejDpK1RjSZFrXXa78VXa-502-380.jpg_240x240q90.jpg')
          ]
        ],
      };
    }
  }
</script>

<style scoped>

</style>
