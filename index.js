var randomNumber=Math.floor(Math.random()*6+1);


var randomimg="dice" + randomNumber+".png";

var realimg="./images/" + randomimg;


var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",realimg);






var randomNumber2=Math.floor(Math.random()*6+1);

var randomimg2="dice"+randomNumber2+".png";


var realimg2="./images/" + randomimg2;


var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",realimg2);


if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent="Player 1 win ";

}

else if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent="player 2 win";

}

else {
    document.querySelector("h1").textContent="No one did not win";
}



