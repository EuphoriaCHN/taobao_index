<template>
  <div>
    <Header></Header>
    <nav-bar></nav-bar>
    <nav-menu></nav-menu>
    <main-menu></main-menu>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import NavBar from '@/components/NavBar';
  import NavMenu from '@/components/NavMenu';
  import MainMenu from '@/components/MainMenu';

  export default {
    name: "Index",
    components: {
      Header,
      NavBar,
      NavMenu,
      MainMenu
    }
  }
</script>

<style scoped>

</style>
