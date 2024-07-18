function menuh(){
    if(document.getElementById("ham").className=="mobilemenu1"){
        document.getElementById("imgmenu").src="icon-hamburger.svg"; 
        document.getElementById("ham").classList.remove("mobilemenu1");
        document.getElementById("ham").classList.add("mobilemenu");     
    }
    else{
    document.getElementById("ham").classList.add("mobilemenu1");
    document.getElementById("ham").classList.remove("mobilemenu");
    document.getElementById("imgmenu").src="icon-close.svg";
    }
}

let slideIndex=1;
showSlide(slideIndex)

function currentSlide(n){
    showSlide(slideIndex = n);
}
function showSlide(n){
    let i;
    let dot=document.getElementsByClassName("dot")
    let image=document.getElementsByClassName("crew")
    let text=document.getElementsByClassName("text")
    if(n > image.length){
        slideIndex=1;
    }
    if(n <1){
        slideIndex= image.length;
    }
    for(i=0;i < text.length ;i++){
        text[i].style.display="none";
        image[i].style.display="none";
    }
    for(i=0 ;i < dot.length ; i++){
        dot[i].className = dot[i].className.replace(" active"," ")
    }
    image[slideIndex-1].style.display = "block";
    dot[slideIndex -1].className += " active";
    text[slideIndex -1].style.display ="flex";

}
function auto(){
    slideIndex++;
    showSlide(slideIndex);
}
setInterval(auto,3500);
