// INTERVAL1
var printTimert;
function printTimer () {
     printTimert =  setInterval( ()=> {
         document.body.innerHTML += "timer" },4000) + "\n";
}
printTimer ()
// INTERVAL2

var counter = 0 ;
function printCounter () {
     vprintCounter =  setInterval( ()=> {
         document.body.innerHTML +=counter++},6000);
}
 printCounter () 

// INTERVAL3

 var loveTimers;
 function iLoveTfunc() {
         loveTimers = setInterval(()=> {
            document.body.innerHTML += "<h1>"+ "i love timers"+"</h1>"
        },5000)
 }
 iLoveTfunc()
 

 function clearFunc () {
     clearInterval(loveTimers)
 }

// INTERVAL4

 var intervalNames;
 var counter = 0;
 function printNames () {
    intervalNames=setInterval(()=> {
         var arrayNames = ["abay","or" , "dalia" , "batel" , "dani" , "yosi" , "lior" , "natanel" ]
         document.body.innerHTML += "<h1>" + arrayNames[counter++] + " " + "</h1>";
         if(counter == arrayNames.length){
            counter =0;
         }

    },4000 )
 }
 printNames ()

 function stopNamesFunc () {
    clearInterval(intervalNames)
 }
 
 // INTERVAL5
 var myTimes;
 function getHfunc () {
     myTimes = setInterval(()=> {
        var myTime = new Date()
        time_id.innerHTML +=  myTime.getHours()+ " :" +  myTime.getMinutes()+ " :"+ myTime.getSeconds() + "<br>";
    },1000 )
}
getHfunc ()

function stopTimesFunc () {
    clearInterval(myTimes)
}
//  INTERVAL5A
var savTime;
 function saveMinFunc () {
    var saveMin = minutes_id.value;
    savTime= times_h2.innerHTML = saveMin;
 }
var counter = savTime;
 function timeContFunc () {
    setInterval(()=> {
        times_h2.innerHTML = savTime--;
    },1000)
 }
 
 timeContFunc ()

 // INTERVAL6
// var intervalId;
// function printTime() {
//    var dateObject = new Date();
//    var secondsFromDate = dateObject.getSeconds();
//    var secondsFromInput = parseInt(time_input.value.substr(6));
   
//    var minutesFromDate = dateObject.getMinutes();
//    var minutesFromInput = parseInt(time_input.value.substr(3,2))
   
//    var hoursFromDate = dateObject.getHours()
//    var hoursFromInput = parseInt(time_input.value.substr(0,2))
   
//    intervalId = setInterval (()=> {
//       var seconds = secondsFromDate - secondsFromInput;
//       time_element.innerHTML = hoursFromDate + ":" +minutesFromDate + ":" + seconds;
//       secondsFromDate++;
//       if(seconds == -1){
//          secondsFromDate = 59;
//          minutesFromDate--;
//          if(minutesFromDate== -1){
//             minutesFromDate=59;
//             hoursFromDate++;
//             if (hoursFromDate == -1) {
//             hoursFromInput =23;
//             }
//          }
//       }
//       if(dateObject.getTime()==dateObject.setHours(hoursFromInput,minutesFromInput,secondsFromInput)){
//          clearInterval(intervalId);
//          console.log();
//       }

//    },1000)
// }
// var distance = 0 ; 
// var intervalId;
// function printKey (e){
//  console.log(e.key)
// }


// function playFunc (){
//    if(e.key == "ArrowRight"){
//       moveRight();
//    }else if(e.key == "ArrowDown"){
//       moveDown()
//    } else if(e.key == "ArrowLeft"){
//       moveLeft()
//    } else if(e.key == "ArrowUp"){
//       moveUp()
//    } else {
//       pauseFunc()
//    }

// }
// function moveRight() {
//    intervalId=setInterval(()=>{
//       box.style.left = distance++ + 'px';
//    },10)
// }
// function moveDown() {
//    intervalId=setInterval(()=>{
//       box.style.top = distance++ + 'px';
//    },10)
// }
// function moveLeft() {
//    intervalId=setInterval(()=>{
//       box.style.right = distance++ + 'px';
//    },10)
// }
// function moveUp() {
//    intervalId=setInterval(()=>{
//       box.style.bottom = distance++ + 'px';
//    },10)
// }

// function pauseFunc() {
//    if(distance==150)
//    pauseFunc()
// }

// function pauseFunc() {
//    clearInterval(intervalId)
// }
