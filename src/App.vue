<template>
  <div id="app">
    <navBar/>
  <h1>hello</h1>
  <helloWorld/>
  </div>
</template>
<script>
import navbar from './components/navbar'
export default {
 components: {
   navBar: navbar
 }
}
</script>
<style lang="scss">
*{
  box-sizing: border-box;
  margin:0%;
}
</style>
