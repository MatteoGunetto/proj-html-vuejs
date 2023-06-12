<script>
import {store} from '../store';
export default{
  name: "PageFooter",
  data(){
    return{
      store
    }
  },
  methods: {
    
  }
}
</script>

<template>
<footer>
  <section id="newsletter" class="text-white">
    <div class="container d-flex justify-content-between align-items-center">
      <h2>Subscribe Now to Our Newsletter !</h2>
      <div class="input-group">
        <input type="email" class="form-control">
        <span class="input-group-text btn-yellow"><i class="fa-solid fa-paper-plane"></i></span>
      </div>
    </div>
  </section>
  <section id="partners">
    <div class="container">
      <div class="text-center">
        <h2>Partners</h2>
        <p>Leverage agile frameworks to provide a robust synopsis for high level <br> overviews. Iterative approches to corporate strategy.</p>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <div class="partner-box">
          <img src="../assets/img/partner-1.png" alt="">
        </div>
        <div class="partner-box width">
          <img src="../assets/img/partner-2.png" alt="">
        </div>
        <div class="partner-box">
          <img src="../assets/img/partner-3.png" alt="">
        </div>
        <div class="partner-box">
          <img src="../assets/img/partner-4.png" alt="">
        </div>
        <div class="partner-box width">
          <img src="../assets/img/partner-5.png" alt="">
        </div>
        <div class="partner-box">
          <img src="../assets/img/partner-6.png" alt="">
        </div>
        <div class="partner-box width">
          <img src="../assets/img/partner-7.png" alt="">
        </div>
        <div class="partner-box">
          <img src="../assets/img/partner-8.png" alt="">
        </div>
      </div>
    </div>
  </section>
</footer>
</template>

<style lang="scss" scoped>
footer{
  #newsletter{
    background-color: #E56768;
    .container{
      .input-group{
        width: 40%;
        position: relative;
        .form-control{
          border-radius: 50px;
          border-right: none;
        }
        .input-group-text{
          border-radius: 50%;
          position: absolute;
          right: -1px;
          top: -1px;
          bottom: -1px;
          color: white;
          padding: 10px 10px;
        }
      }
    }
  }
  #partners{
    .container{
      .d-flex{
        .partner-box{
          width: 11%;
          text-align: center;
          filter: grayscale(1);
          img{
            width: 40%;
            filter: grayscale(100%);
          }
        }
        .width{
          width: 15%;
          img{
            width: 100%;
            filter: grayscale(100%);
          }
        }
      }
    }
  }
}
</style>