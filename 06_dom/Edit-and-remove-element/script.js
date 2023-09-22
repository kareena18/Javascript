function addLanguage(langName){
    const l = document.createElement("li");
    l.innerHTML=`${langName}`;//traverse
    document.querySelector(".language").appendChild(l);
}
addLanguage("python");
addLanguage("typescript");


function addOptLanguage(language){
    const l = document.createElement("li");
    l.appendChild(document.createTextNode(language));
    document.querySelector(".language").appendChild(l);
}
addOptLanguage("golang");

//edit
const secondLang = document.querySelector("li:nth-child(2");
//secondLang.innerHTML="mojo";
const newli=document.createElement("li");
newli.textContent="mojo";
secondLang.replaceWith(newli);

//edit
const firstLang= document.querySelector("li:first-child");
firstLang.outerHTML="<li>JAVA</li>";

//remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
