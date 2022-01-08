let uppercase = "THIS WORD IS IN UPPERCASE" 
let lowercase = "this word is in lowercase"
let normalText = "This word is talking Normal"

let text = prompt("Type in here");

if (text === text.toUpperCase()){
    console.log("WHY ARE YOU YELLING?");
}
else if ( text === text.toLowerCase()){
    console.log("thank you for being quiet");
    }
else {
    console.log("neither yelling or being silent");
}