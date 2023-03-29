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
    const box = createElement(blackList[i]);
    container.appendChild(box);
  }
})

function createElement(randomNumber){
  const box = document.createElement("div");
  box.className = "box";
  box.tagRandomNumber = randomNumber;
  box.addEventListener("click", function(){
    console.log(box.tagRandomNumber);
    box.classList.toggle("clicked");
  })
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