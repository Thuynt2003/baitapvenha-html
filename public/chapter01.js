var today = new Date();
var hourNow = today.getHours();
var greeting ;
if(hourNow >18){
    greeting = 'Good evening !';
}else if(hourNow >12){
    greeting = 'Good afternoon !';
}else if(hourNow >8){
    greeting = 'Good morning !';
}else{
    greeting = 'welcome !';
}
document.write('<h1>' + greeting + '</h1>');
