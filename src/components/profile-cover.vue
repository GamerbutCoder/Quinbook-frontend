<template>
  <div class="container">
    <div class="user" style="justify-content: center;">
      <div > <br><h1 style="text-align: center;">G Adarsh</h1> 
      <div class="afp buttons">
        <br>
        <button class="btn123" @click="onsubmit">About</button>
        <br>
        <br>
        <br>
        <br>
         <button class="btn123" @click="onsubmit1">Friends</button>
         <br>
         <br>
         <br>
        <br>
          <button class="btn123" @click="onsubmit2">Photos</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      
    }
  },
  computed:{
    ...mapGetters(['getFirstName', 'getLastName'])
  },
methods:{
  onsubmit () {
    this.$router.push('/about')
  },
   onsubmit1 () {
     this.$router.push('/friends')
  },
   onsubmit2 () {
      this.$router.push('/userphotos')
  }

}
}

</script>

<style>
.container{
  height: 700px;
}
.body{
      width: 0;
      height: 0;
      margin:0px;
}
.userprofile{
  width: 100%;
  height: 250px;
  border: grey 2px solid;
  background-image: url("http://images.firstcovers.com/covers/g/green_abstract-3733.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-image: url("https://via.placeholder.com/600x250"); */

  
}
.user{
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
}
.userdetails{
  overflow: hidden;
  width: 30%;
  float: left;
  height: 450px;
  border: grey 2px solid;

}

.avatar {
  vertical-align: middle;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: relative;
  top: 30px;
  margin-left: 30px;
}
.btn123{
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}
.btn123:hover {background-color: #3e8e41}

.btn123:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>