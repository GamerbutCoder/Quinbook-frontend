
<template>
  <div id="app">
<router-view/>
  </div>
</template>
<script>

export default {
 
}
</script>
<style lang="scss">
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Regular.otf) format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Medium.otf) format("truetype");
  font-weight: medium;
  font-style: normal;
}
@font-face {
  font-family: "Nista";
  src: local("Nista"),
    url(./fonts/BwNistaInternationalDEMO-Bold.otf) format("truetype");
  font-weight: Bold;
  font-style: normal;
}
* {
  margin: 0px;
  font-family: "Nista", sans-serif;
}
h1 {
  font-weight: bold;
  font-style: normal;
}
p {
  font-weight: regular;
  font-style: normal;
}
body{
  background: linear-gradient(to right, #39ce4b 0%, #4ceed0 25%, #5ecfd4 50%, #6da66c 75%, #aac165 100%);
}

</style>
