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
      <div class="up-arrow">
        <a href="#"><i class="fa-solid fa-angle-up"></i></a>
      </div>
      <section id="newsletter" class="text-white">
        <div class="container d-flex justify-content-between align-items-center">
          <h2 class="fw-bold">Subscribe Now to Our Newsletter !</h2>
          <div class="input-group">
            <input type="email" class="form-control" placeholder="Email address...">
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
        <img  class="wave-3" src="../assets/img/background-wave3.png" alt="">
      </section>
      <section id="foot">
        <div class="container d-flex justify-content-between">
          <div id="left-foot">
            <img src="../assets/img/theme_eduprime_logo.png" alt="">
            <p class="mt-5">EduPrime is the most versatile WordPress theme for educational purposes, <br> showcasing universities, courses, secondary schools etc.</p>
            <div id="socials">
              <span class="rounded-circle">
                <i class="fa-brands fa-facebook-f"></i>
              </span>
              <span class="rounded-circle">
                <i class="fa-brands fa-twitter"></i>
              </span>
              <span class="rounded-circle">
                <i class="fa-brands fa-instagram"></i>
              </span>
            </div>
          </div>
          <div class="m-foot">
            <h5 class="mb-5"><strong>Get EduPrime</strong> </h5>
            <ul>
              <li>Request a website</li>
              <li>Browse Themes</li>
              <li>Payment options</li>
              <li>Support System</li>
              <li>Checkout</li>
              <li>Purchase Theme</li>
            </ul>
          </div>
          <div class="m-foot">
            <h5 class="mb-5"><strong>Networking</strong> </h5>
            <ul>
              <li>Request a website</li>
              <li>Browse Themes</li>
              <li>Payment options</li>
              <li>Support System</li>
              <li>Checkout</li>
              <li>Purchase Theme</li>
            </ul>
          </div>
          <div id="right-foot" class="">
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Search...">
              <span class="input-group-text btn-yellow"><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <h6>Search categories</h6>
            <div class="d-flex align-items-center flex-wrap">
              <span>ECONOMY</span>
              <span>DESIGN</span>
              <span>COACHING</span>
              <span>BUSINESS</span>
              <span>MEDICINE</span>
              <span>LAW</span>
              <span>FITNESS</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
    </template>
    
    <style lang="scss" scoped>
    footer{
      .up-arrow{
        background-color: #E9D758;
        position: fixed;
        bottom: 20px;
        right: 20px;
        border-radius: 50%;
        padding: 10px 15px;
        &:hover{
          background-color: #E56768;
          border: 1px solid #E9D758;
        }
        &:hover i{
          color: #E9D758;
        }
      }
      #newsletter{
        background-color: #E56768;
        .container{
          padding: 30px 0;
          .input-group{
            width: 40%;
            position: relative;
            height: 60px;
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
              padding: 20px 20px;
              z-index: 200000;
              &:hover{
                background-color: #E56768 !important;
              }
            }
          }
        }
      }
      #partners{
        .container{
          padding-top: 50px;
          h2{
            font-size: 50px;
          }
          .d-flex{
            .partner-box{
              width: 11%;
              text-align: center;
              img{
                width: 40%;
                filter: contrast(0%);
              }
              img:hover{
                filter: contrast(100%);
                cursor: pointer;
              }
            }
            .width{
              width: 15%;
              img{
                width: 100%;
                filter: contrast(0%);
              }
            }
          }
        }
      }
      #foot{
        background-color: #E56768;
        padding: 80px 0;
        color: white;
        .container{
          #left-foot{
            width: 30%;
            img{
              width: 70%;
            }
            #socials{
              span{
                border: 1px solid #E9D758;
                margin-right: 15px;
                padding: 5px;
                .fa-facebook-f{
                  font-size: 16px;
                  padding: 8px 6px;
                }
                .fa-twitter{
                  padding: 8px 3px;
                }
                .fa-instagram{
                  padding: 8px 4px; 
                  
                }
              }
            }
          }
          .m-foot{
            width: 15%;
            ul{
              padding: 0;
              li{
                padding-bottom: 5px;
              }
            }
          }
          #right-foot{
            width: 30%;
            .input-group{
              position: relative;
              height: 50px;
              margin-bottom: 40px;
            }
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
              padding: 10px 15px;
              z-index: 200000;
              &:hover{
                background-color: #E56768 !important;
              }
            }
            h6{
              margin-bottom: 40px;
              text-align: right;
            }
            .flex-wrap{
              justify-content: flex-end;
              gap: 5px;
              span{
                border: 1px solid white;
                border-radius: 15px;
                padding: 5px 15px;
                margin-bottom: 5px;
                font-size: 10px;
                cursor: pointer;
                &:hover{
                  background-color: #E9D758;
                  color: #E56768;
                }
              }
            }
          }
        }
      }
    }
    .wave-3{
      position:relative;
      left: 446px;
      background-color: lightgray;


    }

    </style>