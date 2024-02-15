let light = document.querySelector('.darklight .light');
let moon = document.querySelector('.darklight .moon');
let header = document.querySelector('.header');
let hero = document.querySelector('.hero');


let allelem = document.querySelectorAll('.a');
let footerh3=document.querySelectorAll('.footer h3');
let footera=document.querySelectorAll('.footer a');

console.log(allelem);


light.addEventListener('click', function(){

  moon.style.display = 'flex';
  light.style.display = 'none';
  document.body.classList.add('active');
  header.classList.add('active');
  hero.classList.add('active');

  allelem.forEach(function(item){
    item.classList.add('active1');
 
 })
  footerh3.forEach(function(item){
    item.classList.add('active1');
 
 })
 footera.forEach(function(item){
  item.classList.add('active1');

})


})

moon.addEventListener('click', function(){

  moon.style.display = 'none';
  light.style.display = 'flex';
  document.body.classList.remove('active');
  header.classList.remove('active');
  hero.classList.remove('active');
  allelem.forEach(function(item){
     item.classList.remove('active1');
  
  })
  footerh3.forEach(function(item){
    item.classList.remove('active1');
 
 })
 footera.forEach(function(item){
  item.classList.remove('active1');

})
})


//PROJECT

let allitems=document.querySelector('.projectwrapper');
let bditem=document.querySelector('.bd-item');
let consultitem=document.querySelector('.consult-item');

let btnall =document.querySelector('.all');
let btnbd =document.querySelector('.bd');
let btnconsult =document.querySelector('.consultation');


btnbd.addEventListener('click', function(){
  consultitem.style.display = 'none';
  bditem.style.display = 'block';
})

btnconsult.addEventListener('click', function(){
  consultitem.style.display = 'block';
  bditem.style.display = 'none';
})

btnall.addEventListener('click', function(){
  consultitem.style.display = 'block';
  bditem.style.display = 'block';
})




//header scroll
window.addEventListener('scroll',function(){

  if(scrollY > 300){
    header.classList.add('headactive');
  }
  else{
    header.classList.remove('headactive');
  }
})

//Moveuse move

$('document').ready(function(){
  var circle = document.createElement('div');
  
  $(circle).css({ "background":"#e6e6e6","width":15, "height":15,"borderRadius":"50%","border":"1px solid #84b4d4"});
  
  console.log(circle);
 $('.hero').mousemove(function(e){
  $('.hero').append(circle);
  console.clear();
console.log(e.pageX);
console.log(e.pageY);

$(circle).offset({left:e.pageX, top:e.pageY});
  });
  $('.hero').mouseleave(function(e){
    $(circle).remove();
  });

  //image animation

  console.log($('.hero figure'));

  $('.hero figure').addClass('active');
  

})
 
