window.onload=function(){
  //The Variables
  var tens=00
  var seconds=00
  var appendTens=document.getElementById("tens")
  var appendSeconds=document.getElementById("seconds")
  var buttonStart=document.getElementById("start")
  var buttonStop=document.getElementById("stop")
  var buttonRestart=document.getElementById("restart")
  var theInterval

  //Invoke the start
  buttonStart.onclick=function(){
  clearInterval(theInterval)
  theInterval=setInterval(myTimer,100)
  } 
   
  //Invoke the stop
  buttonStop.onclick=function(){
  clearInterval(theInterval)
  }
  
  //Invoke the reset
  buttonRestart.onclick=function(){
  clearInterval(theInterval)
  tens="00"
  seconds="00"
  appendSeconds.innerHTML=seconds
  appendTens.innerHTML=tens
  }

  //Invoke the function
  function myTimer(){
  tens++

  if( tens <=9){
  appendTens.innerHTML="0" + tens
  }

  if (tens > 9){
  appendTens.innerHTML=tens
  }

  if(tens > 99){
  console.log(seconds)
  seconds++;
  appendSeconds.innerHTML="0" + seconds
  tens=0
  appendTens.innerHTML= "0" + 0
  }
   
  if(seconds > 99)
  appendSeconds.innerHTML=seconds
  }
  
}