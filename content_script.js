chrome.runtime.onMessage.addListener(function(msg, sender){
  console.log("msg",msg);
  console.log("receive msg");
  if(msg == "toggle"){
      toggle();
  }
});

var iframe = document.createElement('iframe'); 
iframe.style.background = "white";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.frameBorder = "none"; 
// iframe.src = chrome.extension.getURL("popup.html")
iframe.src = "https://google.com/search?igu=1"

document.body.appendChild(iframe);

function toggle(){
  if(iframe.style.width == "0px"){
      iframe.style.width="500px";
  }
  else{
      iframe.style.width="0px";
  }
}