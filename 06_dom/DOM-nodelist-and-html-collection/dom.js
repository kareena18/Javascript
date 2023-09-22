document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className;
document.getElementById("title").getAttribute;
document.getElementById("title").getAttribute("id");
document.getElementById("title").getAttribute("class");
document.getElementById("title").setAttribute("class","test heading");

const title = document.getElementById("title");
title
title.style.backgroundColor="green";
title.style.padding="15px";
title.style.borderRadius="15px";

title.textContent//display the text which is not visible
title.innerHTML//display everything
title.innerText//display the text which is visible

document.getElementsByClassName("heading")//html collection
document.querySelector("h2")//first element
document.querySelector("#title");
document.querySelector(".heading");
document.querySelector("input[type='password']");
document.querySelector("p:first-child");

const myul = document.querySelector("ul");
const turngreen = myul.querySelector("li");
turngreen.style.backgroundColor="green";
turngreen.style.padding="15px";
turngreen.innerText="five";

const myArr=[1,2,3,4,5];
myArr
const templist = document.querySelectorAll("li");//nodelist
templist
templist[0].style.color="green";

const myh1=document.querySelectorAll("h1");
myh1[0].style.color="red";
templist.forEach(function(l){
    l.style.backgroundColor="blue";
})

const tempClassList=document.getElementsByClassName("list-item");//html collection
const myConvertedArray = Array.from(tempClassList);
myConvertedArray.forEach(function(li){
    li.style.color="orange";
})

