var today = new Date();
var hourNow = today.getHours()
var greeting;

if(hourNow > 18){
    greeting = '晚安';
}else if(hourNow > 12){
    greeting = '午安';
}else if(hourNow > 0){
    greeting = '早安';
}else{
    greeting = '上面的判斷使他不會到這行'
}

document.write('<h3>' + greeting + '</h3>')