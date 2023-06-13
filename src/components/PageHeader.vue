<script>
import {store} from '../store';
export default{
  name: "PageHeader",
  data(){
    return{
      store,
      currentActive: 0,
    }
  },
  methods: {
    changeCurrent(index){
      this.currentActive = index
    }
  }
}
</script>
<template>
  <header class="">
    <div id="side-menu">
      <div class="d-flex">
        <i class="fa-solid fa-cart-shopping p-1"></i>
        <span class="display-b">Shopping Cart</span> 
      </div>
      <div class="d-flex">
        <i class="fa-solid fa-book-open p-1"></i>
        <span class="display-b book">Profile</span> 
      </div>
      <div class="d-flex">
        <i class="fa-solid fa-gear p-1"></i>
        <span class="display-b">Settings</span> 
      </div>
      
    </div>
    <nav class="d-flex justify-content-between align-items-center ">
      <div id="nav-left">
        <img src="../assets/img/theme_eduprime_logo.png" alt="">
      </div>
      <div id="nav-right">
        <ul class="d-flex justify-content-between align-items-center mb-0">
          <li v-for="(elem, index) in store.menuLinks" :key="index" @click="changeCurrent(index)" :class="(currentActive == index) ? 'active' : '' ">
            <a :class="(currentActive == index) ? 'active-bg' : '' " :href="elem.url"><strong>{{ elem.name }}</strong></a>
          </li>
          <div class="btn btn-yellow">
            <a href="#courses"><strong>VIEW COURSES</strong></a>
          </div>
        </ul>
      </div>
    </nav>
    <div id="jumbo" class="justify-content-center align-items-center pt-5">
      <div class="container text-center text-white">
        <h1>Key to your success</h1>
        <p class="mt-5">EduPrime is the most versatile WordPress theme for educational purposes, <br> showcasing universities, courses, secondary schools etc.</p>
        <div class="d-flex justify-content-center gap-5 mt-5">
          <div class="btn btn-yellow text-white">
            <a href="#">
              <i class="fa-solid fa-magnifying-glass pe-2"></i>
              <strong>Search courses</strong>
            </a>
          </div>
          <div class="btn btn-white1">
            <a href="#">
              <i class="fa-solid fa-user-plus pe-2"></i>
              <strong>Apply for universities</strong>
            </a>
          </div>
          
        </div>
      </div>
    </div>
    <img id="wave-1" src="../assets/img/Wave-1.png" alt="">
  </header>
</template>

<style lang="scss" scoped>
header{
  background-color: #E56768;
  position: relative;
  height: 700px;
  #side-menu{
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 300px;
    background-color: #E9D758;
    color: white;
    padding: 8px;
    border-radius: 0 10px 10px 0;
    z-index: 2;
    &:hover{
      transform: scale(1.1);
      transition: all 0.6s ease;
    }
    .display-b{
      display: none;
    }
    &:hover .display-b{
      display: block;
    }
  }
  nav{
    margin: 0 auto;
    background-color: #E56768;
    padding: 30px;
    width: 100%;
    font-weight: bold;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 20000000000;
    #nav-left{
      width: 20%;
      img{
        display: block;
        width: 100%;
      }
    }
    #nav-right{
      width: 60%;
      font-family: 'Fredoka', sans-serif;

      a{
        &:hover{
          color: #E9D758;
        }
      }
    }
  }
  #jumbo{
    position: relative;
    
    z-index: 1;
    margin-top: 120px;
    padding-top: 00px;
    .container{
      padding-top: 100px;
      width: 50%;
      h1{
        font-size: 60px;
      }
      .btn-white{
        background-color: white;
        color: #E56768;
      }
    }
  }
}
header::before{
  background-image: url(../assets/img/theme_slider2_bg-1.jpg);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center;
  content: "";
  opacity: 0.1;
  background-size: cover;
  z-index: 0;
}
#wave-1{
  position: relative;
  bottom: -148px;
}
</style>