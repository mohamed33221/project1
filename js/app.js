
$(document).ready(function () {
  
  $('.loading').fadeOut(3000 , function()
  {
     $('body').css('overflow' , 'auto')
  });
});
let iconUp  = $('.icon-up')
$(window).scroll(function () { 
  let secroll = $(window).scrollTop();
  let navbar = $('#navbar')
  let headeR = $('#section-under-nav').offset().top;
  let fristSection = $('#service').offset().top-100;
  let secendSection =$('#prodect').offset().top-100;
  let thirdSection = $('#about-us').offset().top-100;
  let fourSection = $('#our-project').offset().top-100;
  let fiveSection = $('#numbers').offset().top-200;
  let sixsection =  $('#pricing-plan').offset().top-200;
  let sevenSection = $('#client').offset().top-100;
  let eithSection = $('#stories').offset().top-100;
  let nineSection = $('#need').offset().top-100;
  let ten = $('#get').offset().top-100;

  if(secroll > headeR)
  {
    $('.section-under-nav2').css('transform' , ' translateX(0%)').css('opacity' , '1')
    $('.section-under-nav3').css('transform' , ' translateX(0%)').css('opacity' , '1')
    $('.section-under-nav4').css('transform' , ' translateY(0%)').css('opacity' , '1')
    $('.section-under-nav5').css('transform' , ' translateY(0%)').css('opacity' , '1')
    $('.section-under-nav6').css('transform' , ' translateY(0%)').css('opacity' , '1')
    $('.section-under-nav7').css('opacity' , '1')
  }
  
  if(secroll > fristSection)
  {
    navbar.css('background-color' , ' #c99fae6e').css('color' ,  'black')
    iconUp.css('opacity' , '1')
    $('.service1').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.service2').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.service3').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.service4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.service5').css('opacity' , '1')
  } 
  else
  {
    navbar.css('background-color' , 'transparent')
    iconUp.css('opacity' , '0')
    $('.service1').css('transform' , 'translateX(-30%)').css('opacity' , '0')
    $('.service2').css('transform' , 'translateX(-70%)').css('opacity' , '0')
    $('.service3').css('transform' , 'translateX(-120%)').css('opacity' , '0')
    $('.service4').css('transform' , 'translateY(80%)').css('opacity' , '0')
    $('.service5').css('opacity' , '0')
  }
  //////////////////////////
  ///////////fristSection////
  ////////////////////////////
  if(secroll > secendSection)
  {
    $('.prodect1').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.prodect2').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.prodect3').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.prodect4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.prodect5').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.prodect6').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.prodect7').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.prodect1').css('transform' , 'translateX(-30%)').css('opacity' , '0')
    $('.prodect2').css('transform' , 'translateX(-80%)').css('opacity' , '0')
    $('.prodect3').css('transform' , 'translateX(-110%)').css('opacity' , '0')
    $('.prodect4').css('transform' , 'translateX(-110%)').css('opacity' , '0')
    $('.prodect5').css('transform' , 'translateX(-110%)').css('opacity' , '0')
    $('.prodect6').css('transform' , 'translateX(-60%)').css('opacity' , '0')
    $('.prodect7').css('transform' , 'translateX(-60%)').css('opacity' , '0')
  }
  // secendSection///////////
  ////////////////////////
  if(secroll > thirdSection)
  {
    $('.about-us1').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.about-us2').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.about-us3').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.about-us4').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.about-us5').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.about-us6').css('opacity' , '1')
  }
  else
  {
    $('.about-us1').css('transform' , 'translateX(-40%)').css('opacity' , '0')
    $('.about-us2').css('transform' , 'translateX(-90%)').css('opacity' , '0')
    $('.about-us3').css('transform' , 'translateX(-90%)').css('opacity' , '0')
    $('.about-us4').css('transform' , 'translateX(-90%)').css('opacity' , '0')
    $('.about-us5').css('transform' , 'translateX(-60%)').css('opacity' , '0')
    $('.about-us6').css('opacity' , '0')
  }
    // thirdSection///////////
  ////////////////////////
  if(secroll > fourSection)
  {
    $('.our-project1').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.our-project2').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.our-project4').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.our-project5').delay(100).css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.our-project6').css('opacity' , '1')
  }
  else
  {
    $('.our-project1').css('transform' , 'translateX(-10%)').css('opacity' , '0')
    $('.our-project2').css('transform' , 'translateX(-20%)').css('opacity' , '0')
    $('.our-project4').css('transform' , 'translateX(-60%)').css('opacity' , '0')
    $('.our-project5').delay(100).css('transform' , 'translateX(-100%)').css('opacity' , '0')
    $('.our-project6').css('opacity' , '0')
  }
      // fourSection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > fiveSection)
  {
    $('.numbers1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.numbers2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.numbers3').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.numbers4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.numbers5').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.numbers6').css('opacity' , '1')
  }
  else
  {
    $('.numbers1').css('transform' , 'translateY(-140%)').css('opacity' , '0')
    $('.numbers2').css('transform' , 'translateY(90%)').css('opacity' , '0')
    $('.numbers3').css('transform' , 'translateY(90%)').css('opacity' , '0')
    $('.numbers4').css('transform' , 'translateY(90%)').css('opacity' , '0')
    $('.numbers5').css('transform' , 'translateY(90%)').css('opacity' , '0')
    $('.numbers6').css('opacity' , '0')
  }
  ///////// fiveSection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > sixsection)
  {
    $('.pricing-plan1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.pricing-plan2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.pricing-plan3').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.pricing-plan4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.pricing-plan5').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.pricing-plan1').css('transform' , 'translateY(-300%)').css('opacity' , '0')
    $('.pricing-plan2').css('transform' , 'translateY(-220%)').css('opacity' , '0')
    $('.pricing-plan3').css('transform' , 'translateY(-370%)').css('opacity' , '0')
    $('.pricing-plan4').css('transform' , 'translateY(-300%)').css('opacity' , '0')
    $('.pricing-plan5').css('transform' , 'translateY(100%)').css('opacity' , '0')
  }
    ///////// sixsection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > sevenSection)
  {
    $('.client1').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.client2').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.client3').css('transform' , 'translateX(0%)').css('opacity' , '1')
    $('.client4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.client5').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.client1').css('transform' , 'translateX(-20%)').css('opacity' , '0')
    $('.client2').css('transform' , 'translateX(-50%)').css('opacity' , '0')
    $('.client3').css('transform' , 'translateX(-40%)').css('opacity' , '0')
    $('.client4').css('transform' , 'translateY(120%)').css('opacity' , '0')
    $('.client5').css('transform' , 'translateY(120%)').css('opacity' , '0')
  }
      ///////// sevenSection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > eithSection)
  {
    $('.stories1').css('transform' , 'translateY(0%)' ).css('opacity' , '1')
    $('.stories2').css('transform' , 'translateY(0%)' ).css('opacity' , '1')
    $('.stories3').css('transform' , 'translateY(0%)' ).css('opacity' , '1')
    $('.stories4').css('transform' , 'translateY(0%)' ).css('opacity' , '1')
    $('.stories5').css('transform' , 'translateY(0%)' ).css('opacity' , '1')
    $('.stories6').css('opacity' , '1')
  }
  else
  {
    $('.stories1').css('transform' , 'translateY(-170%)' ).css('opacity' , '0')
    $('.stories2').css('transform' , 'translateY(-150%)' ).css('opacity' , '0')
    $('.stories3').css('transform' , 'translateY(-250%)' ).css('opacity' , '0')
    $('.stories4').css('transform' , 'translateY(-100%)' ).css('opacity' , '0')
    $('.stories5').css('transform' , 'translateY(100%)' ).css('opacity' , '0')
    $('.stories6').css('opacity' , '0')
  }
  ///////// eithSection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > nineSection)
  {
    $('.need1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.need2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.need3').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.need4').css('opacity' , '1')
    $('.need5').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.need1').css('transform' , 'translateY(-200%)').css('opacity' , '0')
    $('.need2').css('transform' , 'translateY(-170%)').css('opacity' , '0')
    $('.need3').css('transform' , 'translateY(-250%)').css('opacity' , '0')
    $('.need4').css('opacity' , '0')
    $('.need5').css('transform' , 'translateY(100%)').css('opacity' , '0')

  }
  ///////// nineSection///////////
  ///////////////////////////////
  ////////////////////////////
  if(secroll > ten)
  {
    $('.get1').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.get2').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.get3').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.get4').css('transform' , 'translateY(0%)').css('opacity' , '1')
    $('.get5').css('transform' , 'translateY(0%)').css('opacity' , '1')
  }
  else
  {
    $('.get1').css('transform' , 'translateY(60%)').css('opacity' , '0')
    $('.get2').css('transform' , 'translateY(-60%)').css('opacity' , '0')
    $('.get3').css('transform' , 'translateY(60%)').css('opacity' , '0')
    $('.get4').css('transform' , 'translateY(-60%)').css('opacity' , '0')
    $('.get5').css('transform' , 'translateY(60%)').css('opacity' , '0')

  }

});

iconUp.click(function()
{
   $("body , html").animate({scrollTop: '0'} , 1500)
})

let cont1 = 0 ;
let cont2 = 0 ;
let cont3 = 0 ;
let cont4 = 0 ;
function cCont1()
{
  cont1++
  if(cont1 == 15) 
  {
    clearInterval(conte1)
  }
  document.getElementById('years').innerHTML = cont1
}
let conte1 = setInterval(cCont1, 10)
function cCont2()
{
  cont2++
  if(cont2 == 400) 
  {
    clearInterval(conte2)
  }
  document.getElementById('specialist').innerHTML = cont2
}
let conte2 = setInterval(cCont2, 5)
function cCont3()
{
  cont3++
  if(cont3 == 200) 
  {
    clearInterval(conte3)
  }
  document.getElementById('projects').innerHTML = cont3
}
let conte3 = setInterval(cCont3, 10)
function cCont4()
{
  cont4++
  if(cont4 == 230) 
  {
    clearInterval(conte4)
  }
  document.getElementById('operation').innerHTML = cont4
}
let conte4 = setInterval(cCont4, 10);

// change from light Mood  to  night Mood
let moon = $('#icon-moon')
let sun = $('#icon-sun')
moon.click(function () { 
  
  moon.css('display' , 'none')
  sun.css('display' , 'block')
  $('#headring').css('background-color','black').css('color' , 'white'); //
  $('.navbar').addClass('navbar-dark').removeClass('navbar-light');
  $('.navbar-brand').addClass('text-secondary').removeClass('text-dark');
  $('.img3').css('z-index' , '3')
  $('.img-back1').css('opacity' , '0.4').css('z-index' , '2')
  $('.img-back2').css('opacity' , '0.4').css('z-index' , '2')
  $('.img-back4').css('z-index' , '2')
  $('#prodect').css('background-color','black').css('color' , 'white');  //
  $('.section-secend').css('background-color' , '#27282d').css('color' , 'white');
  $('.form-cont').css('background-color' , 'black').css('color' , 'white'); //
  $('.img-secend-section1').css('opacity' , '0.4');
  $('#our-project').css('background-color' , 'black').css('color' , 'white'); //
  $('.item-list').css('background-color' , '#27282d' );
  $('.fourth-section').css('background-color' , 'black').css('color' , 'white' ); //
  $('.slid-nav-group ').css('background-color' , '#27282d');
  $('.slid-billed').css('background-color' , '#27282d');
  $('.sixth-section').css('background-color' , 'black').css('color' , 'white' );
  $('.seventh-section').css('background', `linear-gradient(
    to bottom,
    #5a56e9 0%,
    #5a56e9 70%,
    black 70% ,
    black 100% `)
    $('.eighth-section').css('background-color' , 'black').css('color' , 'white' );
    $('.col-lg-1  div').css('background-color' , 'white')
});

sun.click(function () { 
  
  sun.css('display' , 'none');
  moon.css('display' , 'block');
  $('#headring').css('background-color' , 'transparent').css('color' , 'black' );
  $('.navbar').addClass('navbar-light').removeClass('navbar-dark');
  $('.navbar-brand').addClass('text-dark').removeClass('text-secondary');
  $('.img3').css('z-index' , '-1');
  $('.img-back1').css('opacity' , '1').css('z-index' , '-3');
  $('.img-back2').css('opacity' , '1').css('z-index' , '-3');
  $('#prodect').css('background-color' , 'transparent').css('color' , 'black' );
  $('.section-secend').css('background-color' , '#edf2f6').css('color' , 'black' );
  $('.form-cont').css('background-color' , 'white').css('color' , 'black' );
  $('.img-secend-section1').css('opacity' , '1');
  $('#our-project').css('background-color' , 'transparent').css('color' , 'black' );
  $('.item-list').css('background-color' , 'whitesmoke' )
  $('.fourth-section').css('background-color' , 'whitesmoke').css('color' , 'black' );
  $('.slid-nav-group ').css('background-color' , 'white')
  $('.slid-billed').css('background-color' , 'white')
  $('.sixth-section').css('background-color' , 'transparent').css('color' , 'black' );
  $('.seventh-section').css('background', `linear-gradient(
    to bottom,
    #5a56e9 0%,
    #5a56e9 70%,
    white 70% ,
    white 100% `)
    $('.eighth-section').css('background-color' , 'transparent').css('color' , 'black' );
    $('.col-lg-1  div').css('background-color' , 'black')
});
// change from light Mood  to  night Mood//////
// $(document).ready(function () {

//   $('.loading').animat

// });
