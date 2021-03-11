<template>
    <div class="container">
      <Navbar style="width:100.3%"/>
    <div class="userprofile" style="margin: 3px 0px 0px 0px;">
       <img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
    </div>
    <div class="user" style="padding: 15px 1px;height: 430px;">
      <profilecover class="userdetails"/>
      <div class="editdetails" style="text-align: -webkit-center;overflow:scroll;">
        <br>
        <div>
          <div class="education">
            <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">Education</p><br>
          <input type="text" class="input-css" id="education10" v-model="education10" placeholder="Secondary-Education">
          <input type="text" class="input-css" id="education12" v-model="education12" placeholder="Senior-Secondary-Education">
          <input type="text" class="input-css" id="educationUni" v-model="educationUni" placeholder="Graduation">
          </div>
          <div class="jobprofile">
            <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">JobProfile</p><br>
          <input type="text" class="input-css" id="jobProfile" v-model="jobProfile" placeholder="Role" >
          <input type="text" class="input-css" id="companyName" v-model="companyName" placeholder="Copmpany-Name">
          <input placeholder="Joining-Date" class="input-css" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="jobStartDate" v-model="jobStartDate">
          <input placeholder="Present" class="input-css" type="text"  onblur="(this.type='text')" id="jobEndDate" v-model="jobEndDate" readonly>
          <input type="text" class="input-css" placeholder="yearsOfEx" id="yearsOfExp" v-model="yearsOfExp">
          <input type="text" class="input-css" placeholder="Joblocation" id="jobLocation" v-model="jobLocation">
          <p style="font-style: italic; font-size: xxx-large; font-family: cursive;">Personaldetails</p><br>
          <input type="text" class="input-css" id="firstName" :value="info.firstName" >
          <input type="text" class="input-css" :value="info.lastName" id="lastName">
          <input type="text" class="input-css" :value="info.phoneNo" id="phoneNo">
          <input type="text" class="input-css" id="gender" :value="info.gender" >
          <input type="password" class="input-css" :value="password" id="password">
          <input :placeholder="info.dateOfBirth" class="input-css" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="dateOfBirth" v-model="dateOfBirth">
          <input type="text" class="input-css" placeholder="Relationship-Status" id="relationshipStatus" v-model="relationshipStatus">
          <input :placeholder="marriageAnniversary" class="input-css" type="text" onfocus="(this.type='date')" onblur="(this.type='text')" id="marriageAnniversary" v-model="marriageAnniversary">
          <input type="text" class="input-css" id="Hobbies" v-model="Hobbies" :placeholder="Hobbies" >
          <input type="text" class="input-css" placeholder="Address" id="address" v-model="address">
    
          <input type="file" @change="previewImage" accept="image/*">
          
                <img class="preview" :src="img" width="120px" height="120px">
           
          <!-- <input type="file" class="input-css" onchange="readURL(this);" accept="image/*" placeholder="Image" id="img" @change="bindingImage($event)"> -->
          <!-- <form class="upload"> -->
   <!-- <input type="file" name="uploadFile" accept=".json" required />
   <br/><br/>
   <input type="submit" />
</form> -->
      
            
          </div>
          <button class="btn" @click="onsubmit">Save</button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
import Navbar from '../components/navbar.vue'
import profilecover from '../components/profile-cover.vue'
export default {
  name: 'editprofile',
  data () {
   return {
     info:'',
     firstName: '',
     lastName: '',
     phoneNo: '',
     password: '',
     userName: '',
     gender: '',
     dateOfBirth: '',
     img: '',
     relationshipStatus: '',
     education10: '',
     education12: '',
     educationUni: '',
     jobProfile: '',
     companyName: '',
     jobStartDate: '',
     jobEndDate: '',
     yearsOfExp: 0,
     jobLocation: '',
     address: '',
     marriageAnniversary: '',
     Hobbies: ''
   }
  },
  validate () {
    
  },
  methods: {
    onsubmit(){
        const profile ={
          address: this.address,
          companyName: this.companyName,
          dateOfBirth: this.dateOfBirth,
          education10: this.education10,
          education12: this.education12,
          educationUni: this.educationUni,
          firstName: this.firstName,
          gender: this.gender,
          hobbies: this.hobbies,
          img: this.img,
          jobEndDate: this.jobEndDate,
          jobLocation: this.jobLocation,
          jobProfile: this.jobProfile,
          jobStartDate: this.jobStartDate,
          lastName: this.lastName,
          marriageAnniversary: this.marriageAnniversary,
          password: this.password,
          phoneNo: this.phoneNo,
          relationshipStatus: this.relationshipStatus,
          userId: this.userId,
          yearsOfExp: this.yearsOfExp
        }
        console.log(profile)
        axios.put('http://10.177.68.6:8081/update/userName?userName=tom',profile)
          .then(response =>{
            console.log(response)
          })
          .catch(error =>{
            console.log(error)
          })
    } ,
    previewImage: function(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = (event) => {
                    this.img = event.target.result;
                }
                reader.readAsDataURL(input.files[0]);
                console.log(this.img)
            }
        }
  //   bindingImage(event) {
  //     this.img = event.target.files[0]
  //    var reader = new FileReader();
  //   reader.onloadend = function() {
  //   console.log('RESULT', reader.result)
  // }
  // reader.readAsDataURL(this.img);
  //   }
  },
  components: {
     profilecover: profilecover,
     Navbar
 },
 mounted(){
   axios
   .get('http://10.177.68.6:8081/getDetails/userName?userName=tom') 
   .then(response => {
     console.log(response)
     this.info = response.data
   })
   .catch(error =>{
     console.log(error)
   })
    
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
/* .education{
  width: 550px;
 
} */
  .input-css{
    display: block;
    padding: 21px 0px 42px;
    width: 550px;
    min-width: 250px;
    margin-bottom: 20px;
    text-align: center;
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