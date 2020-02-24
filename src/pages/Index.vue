<template>
  <div>
    <Header></Header>
    <nav-bar></nav-bar>
    <div style="width: 100%;height: 30px;background-color:#fc4200;"></div>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import NavBar from '@/components/NavBar';

  export default {
    name: "Index",
    components: {
      Header,
      NavBar
    }
  }
</script>

<style scoped>

</style>
