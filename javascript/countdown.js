var deadline ="03/06/2019"

$( document ).ready(function() {
    console.log( "ready!" );
    initializeClock('timer', deadline);
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

function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML =  'It&#39s only ' + 
                      t.days  + '  Days, '
                      + t.hours + '  Hours, '
                       + t.minutes + '  Minutes and '
                       + t.seconds + '  Seconds Away ';
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
}
