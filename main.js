var mainm = document.getElementById("mainm");
var profile = document.getElementById("profileback");
var projects = document.getElementById("projects");
var slideshow = document.getElementById("slideshow");
var credentials = document.getElementById("credentials");
var contact = document.getElementById("contact");

var project1 = document.getElementById("project1");
var project2 = document.getElementById("project2");
var project3 = document.getElementById("project3");
var project4 = document.getElementById("project4");

var select1 = document.getElementById("selection1");
var select2 = document.getElementById("selection2");
var select3 = document.getElementById("selection3");
var select4 = document.getElementById("selection4");
var select5 = document.getElementById("selection5");

var prjsel1 = document.getElementById("prjsel1");
var prjsel2 = document.getElementById("prjsel2");
var prjsel3 = document.getElementById("prjsel3");
var prjsel4 = document.getElementById("prjsel4");
//slideshow variables//


//slideshow variables//

//slides 1//



//slides 1//

var projsel = 0;
var sel = 0;
var mainclk = 0;

        profile.style.cursor="pointer";
        projects.style.cursor="pointer";
        slideshow.style.cursor="pointer";
        credentials.style.cursor="pointer";
        contact.style.cursor="pointer";

        project1.style.cursor="pointer";
        project2.style.cursor="pointer";
        project3.style.cursor="pointer";
        project4.style.cursor="pointer";


mainm.onclick = function(){
    mainclk = 1;
    if (mainclk == 1){
        mainm.style.width="1800px";
    }
    else{
        mainm.style.width="160px";
    }
}

project1.onclick = function(){
    projsel = 1;
    if (projsel==1){
        project1.style.width="900px";
        project1.style.height="630px";
        project1.style.left="160px";
        project1.style.top="80px";
        
        project2.style.width="50px";
        project2.style.height="20px";
        project2.style.left="90px";
        project2.style.top="120px";
        
        project3.style.width="50px";
        project3.style.height="20px";
        project3.style.left="90px";
        project3.style.top="160px";
        
        project4.style.width="50px";
        project4.style.height="20px";
        project4.style.left="90px";
        project4.style.top="200px";
        
        project1.style.cursor="default";
        project2.style.cursor="pointer";
        project3.style.cursor="pointer";
        project4.style.cursor="pointer";
        
        prjsel1.style.opacity="0";
        prjsel2.style.opacity="1";
        prjsel3.style.opacity="1";
        prjsel4.style.opacity="1";
}else{
        project1.style.width="50px";
        project1.style.height="20px";
        project1.style.left="20px";
        project1.style.top="80px";
        project1.style.cursor="pointer";
    
    prjsel1.style.opacity="1";
}
}
project2.onclick = function(){
    projsel = 2;
    if (projsel==2){
        project2.style.width="900px";
        project2.style.height="630px";
        project2.style.left="160px";
        project2.style.top="80px";
        
        project1.style.width="50px";
        project1.style.height="20px";
        project1.style.left="90px";
        project1.style.top="80px";
        
        project3.style.width="50px";
        project3.style.height="20px";
        project3.style.left="90px";
        project3.style.top="160px";
        
        project4.style.width="50px";
        project4.style.height="20px";
        project4.style.left="90px";
        project4.style.top="200px";
        
        project2.style.cursor="default";
        project1.style.cursor="pointer";
        project3.style.cursor="pointer";
        project4.style.cursor="pointer";
        
        prjsel1.style.opacity="1";
        prjsel2.style.opacity="0";
        prjsel3.style.opacity="1";
        prjsel4.style.opacity="1";
}else{
        project2.style.width="50px";
        project2.style.height="20px";
        project2.style.left="20px";
        project2.style.top="80px";
    project2.style.cursor="pointer";
    
    prjsel2.style.opacity="1";
}
}

project3.onclick = function(){
    projsel = 3;
    if (projsel==3){
        project3.style.width="900px";
        project3.style.height="630px";
        project3.style.left="160px";
        project3.style.top="80px";
        
        project2.style.width="50px";
        project2.style.height="20px";
        project2.style.left="90px";
        project2.style.top="120px";
        
        project1.style.width="50px";
        project1.style.height="20px";
        project1.style.left="90px";
        project1.style.top="80px";
        
        project4.style.width="50px";
        project4.style.height="20px";
        project4.style.left="90px";
        project4.style.top="200px";
        
        project3.style.cursor="default";
        project2.style.cursor="pointer";
        project1.style.cursor="pointer";
        project4.style.cursor="pointer";
        
        prjsel1.style.opacity="1";
        prjsel2.style.opacity="1";
        prjsel3.style.opacity="0";
        prjsel4.style.opacity="1";
}else{
        project3.style.width="50px";
        project3.style.height="20px";
        project3.style.left="20px";
        project3.style.top="80px";
    project3.style.cursor="pointer";
    
    prjsel2.style.opacity="1";
}
    
}

project4.onclick = function(){
    projsel = 4;
    if (projsel==4){
        project4.style.width="900px";
        project4.style.height="630px";
        project4.style.left="160px";
        project4.style.top="80px";
        
        project2.style.width="50px";
        project2.style.height="20px";
        project2.style.left="90px";
        project2.style.top="120px";
        
        project3.style.width="50px";
        project3.style.height="20px";
        project3.style.left="90px";
        project3.style.top="160px";
        
        project1.style.width="50px";
        project1.style.height="20px";
        project1.style.left="90px";
        project1.style.top="80px";
        
        project4.style.cursor="default";
        project3.style.cursor="pointer";
        project2.style.cursor="pointer";
        project1.style.cursor="pointer";
        
        prjsel1.style.opacity="1";
        prjsel2.style.opacity="1";
        prjsel3.style.opacity="1";
        prjsel4.style.opacity="0";
        
}else{
        project1.style.width="50px";
        project1.style.height="20px";
        project1.style.left="90px";
        project1.style.top="80px";
    
    project4.style.cursor="pointer";
    
    prjsel2.style.opacity="1";
}
    
}


profile.onclick = function(){
    sel = 1;
    if (sel==1){
        profile.style.width="1200px";
        profile.style.height="730px";
        profile.style.left="400px";
        
        select1.style.opacity="0";
        
        projects.style.width="50px";
        projects.style.height="24px";
        projects.style.left="330px";
        projects.style.top="70px";
        
        select2.style.opacity="1";
        
        slideshow.style.width="50px";
        slideshow.style.height="24px";
        slideshow.style.left="330px";
        slideshow.style.top="110px";
        
        select3.style.opacity="1";
        
        credentials.style.width="50px";
        credentials.style.height="24px";
        credentials.style.left="330px";
        credentials.style.top="150px";
        
        select4.style.opacity="1";
        
        contact.style.width="50px";
        contact.style.height="24px";
        contact.style.left="330px";
        contact.style.top="190px";
        
        select5.style.opacity="1";
        
        profile.style.cursor="default";
        projects.style.cursor="pointer";
        slideshow.style.cursor="pointer";
        credentials.style.cursor="pointer";
        contact.style.cursor="pointer";
        
    }else{
        profile.style.width="50px";
        profile.style.height="24px";
        profile.style.left="330px";
        
        select1.style.opacity="1";
        
        profile.style.cursor="pointer";
    }
}

projects.onclick = function(){
    sel = 2;
    if (sel==2){
        profile.style.width="50px";
        profile.style.height="24px";
        profile.style.left="330px";
        
        select1.style.opacity="1";
        
        projects.style.width="1200px";
        projects.style.height="730px";
        projects.style.left="400px";
        projects.style.top="29px";
        
        select2.style.opacity="0";
        
        slideshow.style.width="50px";
        slideshow.style.height="24px";
        slideshow.style.left="330px";
        slideshow.style.top="110px";
        
        select3.style.opacity="1";
        
        credentials.style.width="50px";
        credentials.style.height="24px";
        credentials.style.left="330px";
        credentials.style.top="150px";
        
        contact.style.width="50px";
        contact.style.height="24px";
        contact.style.left="330px";
        contact.style.top="190px";
        
        select4.style.opacity="1";
        
        select5.style.opacity="1";
        
        projects.style.cursor="default";
        profile.style.cursor="pointer";
        slideshow.style.cursor="pointer";
        credentials.style.cursor="pointer";
        contact.style.cursor="pointer";
    }else{
        projects.style.width="50px";
        projects.style.height="24px";
        projects.style.left="330px";
        projects.style.top="70px";
        
        select2.style.opacity="1";
        
        projects.style.cursor="pointer";
    }
}

slideshow.onclick = function(){
    sel = 3;
    if (sel==3){
        profile.style.width="50px";
        profile.style.height="24px";
        profile.style.left="330px";
        
        select1.style.opacity="1";
        
        projects.style.width="50px";
        projects.style.height="24px";
        projects.style.left="330px";
        projects.style.top="70px";
        
        select2.style.opacity="1";
        
        slideshow.style.width="1200px";
        slideshow.style.height="730px";
        slideshow.style.left="400px";
        slideshow.style.top="29px";
        
        select3.style.opacity="0";
        
        credentials.style.width="50px";
        credentials.style.height="24px";
        credentials.style.left="330px";
        credentials.style.top="150px";
        
        contact.style.width="50px";
        contact.style.height="24px";
        contact.style.left="330px";
        contact.style.top="190px";
        
        select4.style.opacity="1";
        
        select5.style.opacity="1";
        
        slideshow.style.cursor="default";
        profile.style.cursor="pointer";
        projects.style.cursor="pointer";
        credentials.style.cursor="pointer";
        contact.style.cursor="pointer";
    }else{
        slideshow.style.width="50px";
        slideshow.style.height="24px";
        slideshow.style.left="330px";
        slideshow.style.top="110px";
        
        select3.style.opacity="1";
        
        slideshow.style.cursor="pointer";
    }
    
}

credentials.onclick = function(){
        sel = 4;
    if (sel==4){
        profile.style.width="50px";
        profile.style.height="24px";
        profile.style.left="330px";
        
        select1.style.opacity="1";
        
        projects.style.width="50px";
        projects.style.height="24px";
        projects.style.left="330px";
        projects.style.top="70px";
        
        select2.style.opacity="1";
        
        slideshow.style.width="50px";
        slideshow.style.height="24px";
        slideshow.style.left="330px";
        slideshow.style.top="110px";
        
        select3.style.opacity="1";
        
        credentials.style.width="1200px";
        credentials.style.height="730px";
        credentials.style.left="400px";
        credentials.style.top="29px";
        
        contact.style.width="50px";
        contact.style.height="24px";
        contact.style.left="330px";
        contact.style.top="190px";
        
        select4.style.opacity="0";
        
        select5.style.opacity="1";
        
        credentials.style.cursor="default";
        profile.style.cursor="pointer";
        projects.style.cursor="pointer";
        slideshow.style.cursor="pointer";
        contact.style.cursor="pointer";
    }else{
        credentials.style.width="50px";
        credentials.style.height="24px";
        credentials.style.left="330px";
        credentials.style.top="150px";
        select4.style.opacity="1";
        
        credentials.style.cursor="pointer";
    }
    
}

contact.onclick = function(){
    
    sel = 5;
    if (sel==5){
        profile.style.width="50px";
        profile.style.height="24px";
        profile.style.left="330px";
        
        select1.style.opacity="1";
        
        projects.style.width="50px";
        projects.style.height="24px";
        projects.style.left="330px";
        projects.style.top="70px";
        
        slideshow.style.width="50px";
        slideshow.style.height="24px";
        slideshow.style.left="330px";
        slideshow.style.top="110px";
        
        credentials.style.width="50px";
        credentials.style.height="24px";
        credentials.style.left="330px";
        credentials.style.top="150px";
        
        contact.style.width="1200px";
        contact.style.height="730px";
        contact.style.left="400px";
        contact.style.top="29px";
        
        select4.style.opacity="1";
        
        select5.style.opacity="0";
        
        contact.style.cursor="default";
        profile.style.cursor="pointer";
        projects.style.cursor="pointer";
        slideshow.style.cursor="pointer";
        credentials.style.cursor="pointer";
        
    }else{
        contact.style.width="50px";
        contact.style.height="24px";
        contact.style.left="330px";
        contact.style.top="190px";
        
        select5.style.opacity="1";
        
        contact.style.cursor="pointer";
    }
    
}