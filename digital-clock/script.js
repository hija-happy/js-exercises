

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session ='AM';

    if(h>12)

    if(h==0){
        h==12;
    }
    if(h>12)
    {
        h=h-12;
        session ='PM';
    }
    s = (s<10)?'0'+s:s;
    m = (m<10)?'0'+m:m;
    h = (h<10)?'0'+h:h;

document.getElementById('digitalClock').innerHTML = h +" : "+ m +" : "+s+" "+session;
setTimeout(showTime,1000);
}

showTime();