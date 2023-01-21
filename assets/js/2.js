var logOutBtn = document.getElementById('logOutBtn');
var infoB = window.localStorage.getItem('infoData');
var infoC = JSON.parse(infoB);
console.log(infoC)
document.getElementById('login').innerHTML= `Hi ${infoC[0].name}`

setInterval(function(){
  document.getElementById('review-random1').innerHTML = Math.floor(Math.random()*100000);},1500);
  setInterval(function(){
  document.getElementById('review-random2').innerHTML = Math.floor(Math.random()*100000);},1500);
  setInterval(function(){
  document.getElementById('review-random3').innerHTML = Math.floor(Math.random()*100000);},1500);
  
  
  
  function deleteInfo(){
  window.localStorage.clear()
}