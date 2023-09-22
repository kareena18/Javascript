const parentt = document.querySelector(".parent");
console.log(parentt);
console.log(parentt.children);
console.log(parentt.children[1].innerHTML);

for (let i = 0; i < parentt.children.length; i++) {
    console.log(parentt.children[i].innerHTML);
}
parentt.children[1].style.color="orange";
console.log(parentt.firstElementChild);
console.log(parentt.lastElementChild);

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("NODES: ",parentt.childNodes);
