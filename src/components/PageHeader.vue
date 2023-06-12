<script>
import {store} from '../store';
export default{
  name: "HeaderVue",
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <header class="pt-3">
    <nav class="d-flex justify-content-between align-items-center my-3">
      <div id="nav-left">
        <img src="../assets/img/theme_eduprime_logo.png" alt="">
      </div>
      <div id="nav-right">
        <ul class="d-flex justify-content-between align-items-center mb-0">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Courses</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Purchase</a>
          </li>
          <li class="btn btn-yellow">
            <a href="#">VIEW COURSES</a>
          </li>
        </ul>
      </div>
    </nav>
    <div id="jumbo" class="justify-content-center align-items-center">
      <div class="container text-center text-white">
        <h1>Key to your success</h1>
        <p class="mt-5">EduPrime is the most versatile WordPress theme for educational purposes, <br> showcasing universities, courses, secondary schools etc.</p>
        <div class="d-flex justify-content-center gap-5 mt-5">
          <a class="btn btn-yellow text-white" href="#"><strong>Search courses</strong></a>
          <a class="btn btn-white" href="#"><strong> <i class="fa-solid fa-user-plus"></i>Apply for universities</strong></a>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  background-color: #E56768;
  position: relative;
  height: 700px;
  nav{
    margin: 0 auto;
    width: 95%;
    font-weight: bold;
    #nav-left{
      width: 20%;
      img{
        display: block;
        width: 100%;
      }
    }
    #nav-right{
      width: 60%;
    }
  }
  #jumbo{
    height: 500px;
    font-weight: bold;
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
}
</style>