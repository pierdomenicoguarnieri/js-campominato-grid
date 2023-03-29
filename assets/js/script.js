const btnPlay = document.getElementById("btn");

const container = document.querySelector(".container");

const blackList = [];

let randomNumber;

do{
  randomNumber = verifyRandomNumber(blackList);
  blackList.push(randomNumber)
}while(blackList.length !== 100)

btnPlay.addEventListener("click", function(){
  container.classList.add("fade-in");

  for(let i = 0; i < 100; i++){
  const box =  createElement();
  container.appendChild(box);
  }
})

function createElement(){
  const box = document.createElement("div");
  box.className = "box";
  return box;
}

function getRandomNumber(){
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(number);
  return number;
}

function verifyRandomNumber(array){
  let number;
  do{
    number = getRandomNumber();
  }while(array.includes(number))
  return number;
}