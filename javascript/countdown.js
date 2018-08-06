var deadline ="06/7/2019"

$( document ).ready(function() {
    initializeClock(['days', 'hours', 'minutes', 'seconds'], deadline);
});


function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(ids, endtime){
  var clockItems = new Array(4);
  for(i=0; i<4; i++){
     clockItems[i] = document.getElementById(ids[i]);
  }
  var timeinterval = setInterval(function(){
  var t = getTimeRemaining(endtime);
    clockItems[0].innerHTML = t.days + " Days";
    clockItems[1].innerHTML = t.hours + " Hours";
    clockItems[2].innerHTML = t.minutes + " Minutes";
    clockItems[3].innerHTML = t.seconds + " Seconds";



    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
