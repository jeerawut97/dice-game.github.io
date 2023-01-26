var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var path1 = "images/dice" + randomNumber1 + ".png"
var path2 = "images/dice" + randomNumber2 + ".png"
document.getElementById("img1").src = path1
document.getElementById("img2").src = path2

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WIN"
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "PLAYER 2 WIN"
}
else {
    document.querySelector("h1").innerHTML = "DRAW"
}