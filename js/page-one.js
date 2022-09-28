var dest = new Date("oct 20, 2022 24:00:00").getTime();
var x = setInterval(function(){
var now = new Date().getTime();
var diff = dest - now;
var days = Math.floor(diff/(1000*60*60*24));
var hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
var min = Math.floor((diff%(1000*60*60))/(1000*60));
var sec = Math.floor((diff%(1000*60))/(1000));
if(days <= 0){
    document.getElementById("days").innerHTML = `00`;
}
else if((days/10)<1){
document.getElementById("days").innerHTML = `0${days}`;}
else{
document.getElementById("days").innerHTML = days;
}
if(hours <= 0){
    document.getElementById("hours").innerHTML = `00`;
}
else if((hours/10)<1){
    document.getElementById("hours").innerHTML = `0${hours}`;}
else{
    document.getElementById("hours").innerHTML = hours;}
if(min <= 0){
        document.getElementById("min").innerHTML = `00`;
    }
else if((min/10)<1){
    document.getElementById("min").innerHTML = `0${min}`;}
else{
    document.getElementById("min").innerHTML = min;}
if(sec <= 0){
        document.getElementById("sec").innerHTML = `00`;
    }
else if((sec/10)<1){
    document.getElementById("sec").innerHTML = `0${sec}`;}
else{
    document.getElementById("sec").innerHTML = sec;}


},1000);
