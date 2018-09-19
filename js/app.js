$(document).foundation()
var m = new Date();
var month = m.getMonth();
var season;
          var d = new Date();
var day = d.getDay();
var greeting;

if (day==0){
    document.getElementById("greeting").style.color = "purple";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://d2d00szk9na1qq.cloudfront.net/Product/0d88353b-2719-44e1-bc39-348e80823930/Images/Large_0429768.jpg)"
}

if (day==1){
    document.getElementById("greeting").style.color = "blue";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://www.babybedding.com/images/fabric/solid-orange-minky-fabric_large.jpg)"
}

if (day==2){
    document.getElementById("greeting").style.color = "Orange";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(http://www.satodayscatholic.org/wp-content/uploads/2018/09/blue-background-023.jpg)"
}

if (day==3){
  document.getElementById("greeting").style.color = "yellow";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://images.fabric.com/images/693/693/0354278.jpg)"
}

if (day==4){
    document.getElementById("greeting").style.color = "green";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://static1.squarespace.com/static/54bfc46be4b0a0e8a51ebbf6/t/59ee3a42ec4eb7210abbcba7/1506956074525/tourback.jpg?format=2500w)"
}

if (day==5){
    document.getElementById("greeting").style.color = "red";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(http://cherrypointumc.org/files/2016/07/kelly-green-paper-texture-with-flecks-1024x683.jpg)"
}

if (day==6){
    document.getElementById("greeting").style.color = "yellow";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18954049.jpg)"
}

if(month==0){
    document.getElementById("season").style.backgroundColor = "#586EC8";
    document.getElementByid("season").style.borderColor= "#203C64";
}
if(month==1){
    document.getElementById("season").style.backgroundColor = "#EA8180";
    document.getElementByid("season").style.borderColor= "#BA3D3E";
}
if(month==2){
    document.getElementById("season").style.backgroundColor = "#CFDD5B";
    document.getElementByid("season").style.borderColor= "#50884C";
}
if(month==3){
    document.getElementById("season").style.backgroundColor = "#FF8B6C";
    document.getElementByid("season").style.borderColor= "#935FFF";
}
if(month==4){
    document.getElementById("season").style.backgroundColor = "#947FA6";
    document.getElementByid("season").style.borderColor= "#52365B";
}
if(month==5){
    document.getElementById("season").style.backgroundColor = "#EFA969";
    document.getElementByid("season").style.borderColor= "#EFA91F";
}
if(month==6){
    document.getElementById("season").style.backgroundColor = "#FF3D3E";
    document.getElementByid("season").style.borderColor= "#3D3DFF";
}
if(month==7){
    document.getElementById("season").style.backgroundColor = "#41EF44";
    document.getElementByid("season").style.borderColor= "#99DDB7";
}
if(month==8){
    document.getElementById("season").style.backgroundColor = "#E2C229";
    document.getElementByid("season").style.borderColor= "#E25A29";
    document.getElementById("season").style.borderWidth=10;
}
if(month==9){
    document.getElementById("season").style.backgroundColor = "#EA641C";
    document.getElementByid("season").style.borderColor= "#1D1D1D";
}
if(month==10){
    document.getElementById("season").style.backgroundColor = "#FFAF00";
    document.getElementByid("season").style.borderColor= "#FF6000";
}
if(month==11){
    document.getElementById("season").style.backgroundColor = "#50D721";
    document.getElementByid("season").style.borderColor= "#D12A2A";
}

document.getElementById("season").innerHTML = season;
document.getElementById("greeting").innerHTML = greeting;
            