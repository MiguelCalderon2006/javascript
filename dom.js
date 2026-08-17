console.log("----------------DOM----------------");
//grabing the div container class and hiding it 
const divContainer = document.querySelector(".div-container");
divContainer.style.display = "";
console.log(divContainer);

const emptyContainer = document.querySelector(".empty-container");
emptyContainer.style.display = "none";
console.log(emptyContainer);

//selects all elements with class container and returns an html container
const containers = document.getElementsByClassName("container");
console.log(containers);

//selects all elements with .container  and returns a node list
const sameContainers = document.querySelectorAll(".container");
console.log(sameContainers);

const divs = divContainer.querySelectorAll("div");
console.log(divs)
for (let i = 0; i < divs.length; i++) {
    divs[i].style.width = "7rem"
    divs[i].style.height = "7rem"
}

const evenDivs = divContainer.querySelectorAll("div:nth-of-type(2n)")
console.log(evenDivs)
for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "#2d2d2d"
}

const h1text = document.querySelectorAll("h1");
for (let i = 0; i < h1text.length; i++) {
    h1text[i].style.fontSize = "3rem";
}

h1text[0].innerHTML = `placeholder`;
console.log(h1text[0]);

console.log(divs[0].parentElement);
console.log(divContainer.childElementCount)
console.log(divContainer.children)
console.log(divContainer.parentNode)
console.log(divContainer.childNodes)

divs[11].remove();

const createDiv = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.className = "div-block";
    newDiv.style.width = "7rem";
    newDiv.style.height = "7rem";
    newDiv.innerHTML = `new div ${iter}`;
    newDiv.style.backgroundColor = "#c1121f";
    parent.appendChild(newDiv);
}

for (let i = 1; i <= 4; i++)
    createDiv(divContainer, i);
