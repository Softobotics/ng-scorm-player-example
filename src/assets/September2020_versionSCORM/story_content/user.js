function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62gEkRZ4btt":
        Script1();
        break;
      case "6Se1ocWyuBi":
        Script2();
        break;
      case "5YbIbHZwurO":
        Script3();
        break;
      case "6AqS1soSf8Q":
        Script4();
        break;
  }
}

function Script1()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("SL_Minutes");
var seconds = player.GetVar("SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("Display",display);
    player.SetVar("SL_Minutes",mm);
    player.SetVar("SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_Expired","True");
        player.SetVar("Display","00:00");
    }
}, 1000);
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  // Name of the certificate html file
var certFilename = 'certificate.html';

// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");

// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
    /* If src of current iFrame element equals the filename set in variable
	** certFilename call the generatePDF() function.
	*/
    var src = iframeElements[i].getAttribute('src');
	if (src.indexOf(certFilename) !=-1) {
		iframeElements[i].contentWindow.generatePDF();
	}
}
}

function Script4()
{
  // Establish StoryLine player connection and get timer duration
var player=GetPlayer();
var minutes = player.GetVar("SL_Minutes");
var seconds = player.GetVar("SL_Seconds");
var duration = minutes * 60;
var duration = duration + seconds;
var duration = duration + 2;

// Set the number of seconds to count down
var d = new Date(); d.setSeconds(d.getSeconds() + duration);
var countDownDate = new Date(d).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for minutes and seconds
    var mm = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var ss = Math.floor((distance % (1000 * 60)) / 1000);

        if (mm < 10) {mm = "0"+mm;}
        if (ss < 10) {ss = "0"+ss;}
        // This formats your string to MM:SS
        var t = mm+":"+ss;
        var display = t

     // Update StoryLine with each count
    player.SetVar("Display",display);
    player.SetVar("SL_Minutes",mm);
    player.SetVar("SL_Seconds",ss);

    // Exit the timer if the user has completed the timed event
    var completed=player.GetVar("Completed");
    if (completed === 1) {
        clearInterval(x);
    }
    
    // If the count down is over, show layer 
    if (distance <= 0) {
        clearInterval(x);
        player.SetVar("T_Expired","True");
        player.SetVar("Display","00:00");
    }
}, 1000);
}

