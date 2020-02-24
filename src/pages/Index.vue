<template>
  <div>
    <Header></Header>
    <nav-bar></nav-bar>
    <nav-menu></nav-menu>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import NavBar from '@/components/NavBar';
  import NavMenu from '@/components/NavMenu';

  export default {
    name: "Index",
    components: {
      Header,
      NavBar,
      NavMenu
    }
  }
</script>

<style scoped>

</style>
