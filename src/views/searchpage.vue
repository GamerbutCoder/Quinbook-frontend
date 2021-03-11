<template>
  <div class="container">
    <Navbar style="width: 100.3%;margin-bottom: 3px;" />
    <div class="userprofile"> 
      <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div><br>
    <div class="user">
      <profilecover class="userdetails"/>
      <div class="userfriends">
        <div style="padding: 12px;">
          <input type="text" name="searchtext" v-model="searchtext" placeholder="search friends" style="padding: 8px 300px;">
          <button style="padding: 8px;" @click="search">search</button>
        </div>
        <div class="friends" v-for="i in friends" :key="i.id" style="margin: 30px 211px;">
            <div class="friendrequest" style="padding: 0px 0px 0px 88px;">
              <div>
                <br>
                  <img src="../assets/user.svg" width="23" height="23">
                  <br>
                <p> {{i.userName}}</p>
              </div>
              <div class="iconsforaddblock" style="display:flex">
                <div class="AddFriend/UnFriend" style="padding: 21px;">
                <img src="../assets/user-add.svg" width="23" height="23">
                </div>
                <div  class="Block/UnBlock" style="padding: 21px;">
                <img src="../assets/user-block.svg" width="23" height="23">
                </div>
              </div>
            </div> 
        </div>
      </div>

    </div>
    </div>
</template>

<script scoped>
import Navbar from '../components/navbar3.vue'
import profilecover from '../components/profile-cover.vue'
import store from '../store/index.js'
import axios from 'axios'
export default {
    data () {
        return{
            friends :100,
            searchtext: ''
        }
    },
  components: {
    profilecover: profilecover,
    Navbar
 },
 mounted () {
    axios
      .get('http://10.177.68.5:8090/user/getUserName/t')
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
  },
 methods : {
   search(){
     axios
      .get('http://10.177.68.5:8081/user/getUserName/'+store.state.searchtext)
      .then(response => {
        console.log(response)
        this.friends = response.data
      })
      .catch(error => {
        this.errorMessage = error.message
        console.log(error)
      })
   }
 }
}
</script>

<style scoped>
.friendrequest{
  display: flex;
}
.userfriends{
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    border: solid black 2px;
    overflow: scroll;
}
.friends{
  margin: 2%;
  width: 50%;
  height: 20%;
  text-align: center;
  border: solid green 2px;
  box-shadow: 3px 4px #7cad3e;
  
}
.avatar:hover{
    display: none;
}
.friends:hover {
  animation: shake 0.5s;
  animation-iteration-count: 5;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  50% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>