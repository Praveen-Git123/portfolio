const words=[
"AI Developer",
"Android Developer",
"MIT App Inventor Developer",
"Python Learner"
];

let wordIndex=0;
let charIndex=0;
let typing=document.getElementById("typing");

function type(){

if(!typing) return;

typing.textContent=words[wordIndex].substring(0,charIndex);

charIndex++;

if(charIndex<=words[wordIndex].length){

setTimeout(type,100);

}
else{

setTimeout(erase,1500);

}

}

function erase(){

typing.textContent=words[wordIndex].substring(0,charIndex);

charIndex--;

if(charIndex>=0){

setTimeout(erase,50);

}
else{

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

setTimeout(type,300);

}

}

type();
