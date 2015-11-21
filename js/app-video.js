var video = document.getElementById("video1");
var video2 = document.getElementById("video2");
var progress = document.getElementById("progress");
var progressnum = document.getElementById("progressnum");
var muteBtn = document.getElementById("mute");
var vr = video.readyState;
var vLength = video.duration.toFixed(1);

//autoplay a la fin de l"annimation
window.onload =function whichTransitionEvent(){
  var l = document.getElementById("loading-screen");

  console.log(l);
    $("#loading-screen").one("animationend webkitAnimationEnd oanimationend msAnimationEnd",
     function(e){
       function displayB(){
         document.getElementById("loading-screen").className ="display-loading-screen";
       }
       setTimeout(displayB, 5000);

       function retard(){
         (video).play();
         (video2).play();
       }
       setTimeout(retard, 4000);
     }
   );
};

//controleur video
function vidplay() {
 var button = document.getElementById("play");
 if (video.paused){
    (video).play();
    (video2).play();
    button.textContent = "||";
    //console.log('pause');
 } else {
    (video).pause();
    (video2).pause();
    button.textContent = ">";
    //console.log('play');
 }
}

function restart() {
  video.currentTime = 0;
  video2.currentTime = 0;
  //console.log('restart');
}

function skip(value) {
  video.currentTime += value;
  video2.currentTime += value;
  //console.log('skip');
}

function mute(){
  if (video.muted) {
      video.muted = false;
      muteBtn.textContent = "SON";
    } else {
      video.muted = true;
      muteBtn.textContent = "OFF";
    }
  }

  //barre de progression
  video.ontimeupdate = function(){
    if(video.readyState < video.HAVE_METADATA)
    video.play();
    video.onloadmetadata = function(){
    video.duration = vd;
    video.readyState = vr;
    video.videoWidth = vw;
    video.currentTime[2] = vc;
    var pgFlag = "";
    };
    var maxprogress = video.Length;
    var actualprogress = 0;
    var itv = 0;
    if(actualprogress >= maxprogress)
    {
      clearInterval(itv);
      return;
    }
   actualprogress +=  video.currentTime;
   var vduration = video.duration;
   var fraction = actualprogress / vduration;
   var pourcent = Math.ceil(fraction * 100);
   progress.style.width = pourcent + "%";
   progressnum.innerHTML = Math.ceil(pourcent*0.24) +"heures";
   if(actualprogress == maxprogress) clearInterval(itv);
   //console.log(progressnum);
   progressnum.innerHTML = Math.floor(pourcent* 0.24) + "heures";
   if(actualprogress == maxprogress) clearInterval(itv);
   //console.log(vLength);
  };

//verification lecture de la video plus affichage temps restant
if (video.canPlayType) {
  video.addEventListener("video", function () {
    document.getElementById("NavBtn").style.display = "block";
  }, false);
  video.addEventListener("loadedmetadata", function () {
  cv = video.ontimeupdate;
  var vr = video.readyState;
  vLength  = video.duration.toFixed(1);
  //document.getElementById("vLen").textContent = vLength ;
  //console.log(cv);
}, false);
var lastime = vLength - vr;
//console.log();
}

// assurer la synchronisation des videos
video.onplay = function checkVideoSync(){
  var time1 = video.currentTime,
      time2 = video2.currentTime;
  //console.log("video",time1, time2, vLength);
  if(Math.abs(time1 - time2) > 1){
    var abs = Math.abs(time1 - time2);
    //console.log(abs);
    //Seek to lowest index
    video.currentTime = video2.currentTime = Math.min(time1, time2);
    //console.console.log('good');
  }
};
