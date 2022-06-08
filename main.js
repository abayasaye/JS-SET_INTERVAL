// INTERVAL1
// var printTimert;
// function printTimer () {
//      printTimert =  setInterval( ()=> {
//          document.body.innerHTML += "timer" },4000) + "\n";
// }
// printTimer ()
// // INTERVAL2

// var counter = 0 ;
// function printCounter () {
//      vprintCounter =  setInterval( ()=> {
//          document.body.innerHTML +=counter++},6000);
// }
//  printCounter () 

// // INTERVAL3

//  var loveTimers;
//  function iLoveTfunc() {
//          loveTimers = setInterval(()=> {
//             document.body.innerHTML += "<h1>"+ "i love timers"+"</h1>"
//         },5000)
//  }
//  iLoveTfunc()
 

//  function clearFunc () {
//      clearInterval(loveTimers)
//  }

// // INTERVAL4

//  var intervalNames;
//  var counter = 0;
//  function printNames () {
//     intervalNames=setInterval(()=> {
//          var arrayNames = ["abay","or" , "dalia" , "batel" , "dani" , "yosi" , "lior" , "natanel" ]
//          document.body.innerHTML += "<h1>" + arrayNames[counter++] + " " + "</h1>";
//          if(counter == arrayNames.length){
//             counter =0;
//          }

//     },4000 )
//  }
//  printNames ()

//  function stopNamesFunc () {
//     clearInterval(intervalNames)
//  }
 
//  // INTERVAL5
//  var myTimes;
//  function getHfunc () {
//      myTimes = setInterval(()=> {
//         var myTime = new Date()
//         time_id.innerHTML +=  myTime.getHours()+ " :" +  myTime.getMinutes()+ " :"+ myTime.getSeconds() + "<br>";
//     },1000 )
// }
// getHfunc ()

// function stopTimesFunc () {
//     clearInterval(myTimes)
// }
 // INTERVAL5A
var savTime;
 function saveMinFunc () {
    var saveMin = minutes_id.value;
    savTime= times_h2.innerHTML = saveMin;
 }
var counter = savTime;
 function timeContFunc () {
    setInterval(()=> {
        times_h2.innerHTML = savTime--;
    },500)
 }
 timeContFunc ()

