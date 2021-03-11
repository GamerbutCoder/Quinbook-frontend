<template>

    <div class="container">
      <Navbar style="width:100.3%"/>
    <div class="userprofile" style="margin: 3px 0px 0px 0px;">
       <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div>
    <div class="user" style="padding: 15px 1px;">
      <profilecover class="userdetails"/>
      <div class="editdetails" style="text-align: -webkit-center;overflow:scroll;">
        <br>
        <div>
            <div class="details" v-for="i in details" :key="i.id">
              <br>
            <div>
              <p> 
                  Details {{i}}
            </p>
            </div>
        </div>
          
        </div>
      </div>

    </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar.vue'
import profilecover from '../components/profile-cover.vue'
export default {
    data() {
        return {
            details:10
        }
    },
  components: {
     profilecover: profilecover,
     Navbar
 }
}

</script>

<style scoped>
.editdetails{
  width: 60%;
  float: right;
  height: 450px;
  border: grey 2px solid;
  overflow: hidden;

}
  .input-css{
    display: block;
    padding: 21px 0px 42px;
    width: 550px;
    min-width: 250px;
    margin-bottom: 20px;
    outline: none;
    border-radius: 5px;
    border: 0px;
    border-bottom: 1px solid white;
    -moz-box-shadow: 0 0 10px 1px gray;
    -webkit-box-shadow: 0 0 10px 1px gray;
    box-shadow: 0 0 10px 1px gray;
  }
  
  .avatar:hover{
    display: none;
  }
</style>