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
  document.getElementById("greeting").style.backgroundImage="url(https://wow.zamimg.com/uploads/screenshots/normal/640522-the-light-mother.jpg)"
}

if (day==1){
    document.getElementById("greeting").style.color = "cyan";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://damrarola20.files.wordpress.com/2014/04/01.jpg)"
}

if (day==2){
    document.getElementById("greeting").style.color = "Orange";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/2/2b/Servant_of_Neptulon_TCG.jpg)"
}

if (day==3){
  document.getElementById("greeting").style.color = "yellow";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://pre00.deviantart.net/4e79/th/pre/f/2009/351/c/b/arcane_magic_by_slashriot.jpg)"
}

if (day==4){
    document.getElementById("greeting").style.color = "orange";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://www.powned.it/wp-content/uploads/2015/08/thufull.jpg)"
}

if (day==5){
    document.getElementById("greeting").style.color = "red";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://img00.deviantart.net/ea33/i/2015/223/5/a/shadowmoon_valley__outland_by_wolf_demon_shadow-d959wjm.jpg)"
}

if (day==6){
    document.getElementById("greeting").style.color = "yellow";
  document.getElementById("greeting").style.fontSize = "xx-large"; 
  document.getElementById("greeting").style.backgroundImage="url(https://vignette.wikia.nocookie.net/wowwiki/images/1/1a/Voidreaver.jpg/revision/latest?cb=20070912131708)"
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
            