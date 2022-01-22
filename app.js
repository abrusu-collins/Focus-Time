let timediv=document.getElementById("timediv");
let timeofday=document.getElementById("timeofday");

//getTime function
function getTime(){
    //get time
    let time=new Date();
let secs=time.getSeconds().toString().length==1?"0"+time.getSeconds():time.getSeconds();
let mins=time.getMinutes().toString().length==1?"0"+time.getMinutes():time.getMinutes();
let hours=time.getHours().toString().length==1?"0"+time.getHours():time.getHours();



//AM or PM
if(hours>=12){
    var amPm="PM";
}else{
    var amPm="AM";
}
timediv.textContent=`${hours}: ${mins}: ${secs} ${amPm}`;
//Morning, Afternoon or Evening
if(hours>=0 &&hours <12){
    timeofday.textContent=`Morning`;
}else if(hours>=12 &&hours<18){
    timeofday.textContent=`Afternoon`;

}
else{
    timeofday.textContent=`Evening`;

}

//background changing
if(hours>=6 &&hours<12){
    document.body.classList.remove("midnight")
    document.body.classList.add("morning");
}
else if(hours>=12 &&hours<18){
    document.body.classList.remove("morning");
    document.body.classList.add("afternoon");
}
else if(hours>=18 &&hours<=23){
    document.body.classList.remove("afternoon");
    document.body.classList.add("night");
}

else if(hours>=0 &&hours<6){
    document.body.classList.remove("night");
    document.body.classList.add("midnight");
}
//call itself every one second
setInterval(()=>{getTime()},1000);


}

getTime();

