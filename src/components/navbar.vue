<template>
  <div id="navbar">
      <div class="logo">
        <span ><img src="../../public/Quinbook.png" alt="logo" srcset="" width="40px" height="40px" id="quinlogo"></span>
      </div>
      <div class="searchbar">
          <input type="text" placeholder="search friends">
          <button>search</button>
      </div>
      <div class="notifications">
          <div class="notifications">
              <button>notifications</button>
              <button>profile</button>
          </div> 
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
    background-color:#3AED91  ;
    height: 60px;
    width: 100%;
    display: flex;
    align-content: space-between;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
}
.logo {
    padding-top: 8px;
    margin-left: 30px; 
    display: inline-block;
}
#quinlogo{
    box-shadow: 1px 1px 1px 1px black;
}
.searchbar{
     padding-left: 20%;
}
.notifications{
     
}


    
</style>