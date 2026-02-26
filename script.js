function scrollPlans(){

document.getElementById("plans")
.scrollIntoView({behavior:"smooth"})

}



function animate(id,target){

let i=0

let x=setInterval(()=>{

i++

document.getElementById(id).innerHTML=i

if(i==target)

clearInterval(x)

},10)

}


animate("members",800)
animate("trainersNum",20)
animate("years",12)



function bmi(){

let h=document.getElementById("h").value/100
let w=document.getElementById("w").value

let b=w/(h*h)

document.getElementById("ans").innerHTML=

"BMI = "+b.toFixed(1)

}
/* Scroll Animation */

window.addEventListener("scroll",function(){

let reveals=document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight

let elementTop=reveals[i].getBoundingClientRect().top

if(elementTop<windowHeight-100){

reveals[i].classList.add("active")

}

}

})
/* Smooth Scroll */

document.querySelectorAll("a").forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault()

document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

})

})

})
window.addEventListener("scroll",function(){

let nav=document.querySelector("nav")

if(window.scrollY>100){

nav.style.background="#020617"

}
else{

nav.style.background="black"

}

})
document.querySelectorAll(".card button").forEach(btn=>{

btn.addEventListener("click",function(){

alert("Membership Request Sent!")

})

})
