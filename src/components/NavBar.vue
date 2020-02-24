<template>
  <nav class="nav-bar">
    <div class="container">
      <div class="nav-logo">
        <h1>
          <a href="#">
            <img src="../assets/images/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png" alt="" />
          </a>
        </h1>
      </div>
      <div class="nav-search">
        <div class="search">
          <div class="search-switch">
            <ul class="clear-fix">
              <li class="active">宝贝</li>
              <li>天猫</li>
              <li>店铺</li>
            </ul>
          </div>
          <div class="search-form">
            <input type="text" placeholder="家用学生打印机" />
            <span>搜索</span>
          </div>
        </div>
        <div class="hot-list">
          <ul class="clear-fix">
            <li
              v-for="(value, index) in hotList"
              :key="index"
            >
              <a href="#" v-text="value"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="nav-adv">
        <a href="#">
          <img src="../assets/images/TB1RgLRvkL0gK0jSZFAXXcA9pXa-120-120.png" alt="" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
  import '@/assets/images/TB1_uT8a5ERMeJjSspiXXbZLFXa-143-59.png';
  import '@/assets/images/TB1RgLRvkL0gK0jSZFAXXcA9pXa-120-120.png';

  export default {
    name: "NavBar",
    data() {
      return {
        hotList: [
          '新款连衣裙', '四件套', '潮流T恤', '时尚女鞋', '短裤', '半身裙', '男士外套', '墙纸', '行车记录仪', '新款男鞋',
          '耳机', '时尚女包', '沙发'
        ]
      };
    }
  }
</script>

<style scoped>

</style>
