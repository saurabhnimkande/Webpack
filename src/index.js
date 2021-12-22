import "./index.css";
import image from "./twitter.png";

let root = document.getElementById("root");

let navbar=document.createElement("div");
navbar.id="navbar"

let logo =document.createElement("img");
logo.src=image;

let websiteName=document.createElement("h4");
websiteName.innerText="Notepad";

navbar.append(logo,websiteName);


let maindiv = document.createElement("div");

let subdiv1=document.createElement("div");
let paragraph=document.createElement("p");
paragraph.id="paragraph";
subdiv1.append(paragraph);
maindiv.append(subdiv1);

let subdiv2=document.createElement("div");
let textarea=document.createElement("TEXTAREA")
textarea.id="inputtext";
subdiv2.append(textarea);
maindiv.append(subdiv2);




root.append(navbar,maindiv);


let outputpara=document.getElementById("paragraph");
outputpara.innerText="Enter text below to display"

let inputpara=document.getElementById("inputtext");


console.log('outputpara:', outputpara.innerText);

inputpara.addEventListener("input",lol);

function lol() {
    outputpara.innerText=inputpara.value;
}