var start = document.getElementById ('start');
var reset = document.getElementById ('reset');
var stop = document.getElementById ('stop');
var wm = document.getElementById ('w-minutes');
var ws = document.getElementById ('w-seconds');
var bm = document.getElementById ('b-minutes');
var bs = document.getElementById ('b-seconds');

var startTime;
 start.addEventListener('click', function(){
    if(startTime === undefined){
        startTime = setInterval (timer, 1000)
    } else {
        alert('timer has already run')
    }
 })
reset.addEventListener('click',function(){
    wm.innerText = 25;
    ws.innerText = 00;
    bm.innerText = 05;
    bs.innerText = 00;
    
    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTime = undefined;
})
stop.addEventListener('click',function(){
    stopInterval()
    startTime = undefined;
})

 function timer (){
    if(ws.innerText !=0){
        ws.innerText--;
    } else if(wm.innerText !=0 && ws.innerText ==0){
        ws.innerText = 59;
        wm.innerText--;
    }
    if(wm.innerText ==0 && ws.innerText ==0){
        if(bs.innerText !=0){
            bs.innerText--;
        } else if(bm.innerText !=0 && bs.innerText ==0){
            bs.innerText = 59;
            bm.innerText --;
        }   
    }
 }
 function stopInterval(){
    clearInterval(startTime);
 }