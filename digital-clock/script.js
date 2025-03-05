

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session ='PM';

    if(h=12)
        session = 'AM';
        


document.getElementById('digitalClock').innerHTML = h +" : "+ m +" : "+s+" "+session;
setTimeout(showTime,1000);
}

showTime();