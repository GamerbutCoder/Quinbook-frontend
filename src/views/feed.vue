<template>
  <div class="container">
      <navbar />
      <br>
      <div class="today" style="margin: 0px 10px;"></div>
      <div class="feed" style="margin: 0px 6px;">
          <div class="uploadpost"><img src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar" class="avatar">
          <div>
              <input type="text" name="How you doing" class="timeline">
              <button class="btn" @click="onsubmit"></button>
              <div style="display:flex">
                <img src="../assets/video.svg" style="margin: 0px 105px" width="30" height="30">
                <img src="../assets/photo.svg" style="margin: 0px 72px;" width="30" height="30">
                <button style="margin: 0px 100px;">Post</button>
              </div>
          </div>
          </div>
          <div class="post" v-for="i in feeds" :key="i.id">
              <div class="plaf">
                  <div class="pial">
                    <img class="avatar" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" alt="Avatar">
                    <div class="likeanddis" style="margin: -40px 0px;">
                        <img src="../assets/thumbs-up.svg" style="margin: 24px;">
                        <img src="../assets/thumbs-down.svg" style="margin: 20px;">
                        <div style="float">
                            <img class="commentdiv" src="../assets/comment.svg" style="margin: 20px;" width="30" height="30" @click="comment">
                            <div class="commentinsidediv">
                                <input type="text" name="How you doing" class="small">
                            </div>
                        </div>
                    </div>
                  </div>
                    <div class="feed" style="height:400px">
                      <p> feeds {{i}}</p>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import navbar from "../components/navbar.vue"
export default {
    data () {
        return{
            feeds :100
        }
    },
    components:{
        navbar
    }

}
</script>

<style scoped>
.likeanddis{
    display: flex;
}
.plaf{
    display: flex;
    justify-content: space-between;
}
.avatar {
    vertical-align: middle;
    width: 104px;
    height: 100px;
    border-radius: 50%;
    position: relative;
    top: -26px;
    margin-left: -2px;
}
.avatar > img:hover {
  transform: scale(1.3);
  transition: transform 0.5s;
  border: solid #7cad3e 2px;
}
.container{
  height: 700px;
}
.body{
      width: 0;
      height: 0;
      margin:0px;
}
.feed{
  width: 900px;
  float: right;
  height: 700px;
  position: inherit;
  border: grey 2px solid;
  overflow: scroll;

}
.today{
    width: 30%;
    float: left;
    height: 700px;
  border: grey 2px solid;
  overflow: scroll;
}
.uploadpost{
    width: 87%;
    height: 170px;
    display: inline-flex;
    margin: 30px;
    padding: 29px 8px 10px;
    border: grey 2px solid;
    overflow: scroll;
}
.timeline{
    width: 550px;
    /* float: right; */
    height: 83px;
    margin: 0px;
    border: grey 2px solid;
}
.post{
    margin: 30px;
    width: 87%;
    height: 17%;
    padding: 29px 8px 10px;
    text-align: center;
    border: solid green 2px;
    box-shadow: 3px 4px #7cad3e;
    overflow: scroll;
}
.btn{
      background-color: white;
      width: 100px;
      margin: auto;
      display: block;
      color: #0a0ef7;
      padding: 0px 27px 11px;
      border: 1px solid white;
      cursor: pointer;
}
.commentinsidediv{
    display: none;
}
.commentdiv:hover .commentinsidediv {
  display: block;
}
</style>