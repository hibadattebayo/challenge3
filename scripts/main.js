//digital clock!!
function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
	
	var day =  date.getDate();
	//I did this because for some reason the month said february, while it is march. Maybe this is because in js the months start from 0. SO zero being January
	var month = date.getMonth() + 1; 
	var year = date.getFullYear();
	
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("clockDisplay").innerText = time;
    document.getElementById("clockDisplay").textContent = time;
	
	var date = day + "-" + month + "-" + year;
	document.getElementById("dateDisplay").innertext = date;
	document.getElementById("dateDisplay").textContent = date;
    
    setTimeout(showTime, 1000);
    
}
showTime();