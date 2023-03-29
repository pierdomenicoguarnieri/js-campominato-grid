const btnPlay = document.getElementById("btn");

const select = document.getElementById("select");

const container = document.querySelector(".container");

const blackList = [];

let randomNumber;

btnPlay.addEventListener("click", function(){
  container.classList.add("fade-in");

  let boxNumber;

  switch (parseInt(select.value)){
    case 1:
      boxNumber = 100;
    break;
    
    case 2:
      boxNumber = 81;
    break;

    case 3:
      boxNumber = 49;
    break;

    default:
      boxNumber = 100;
  }
  
  do{
    randomNumber = verifyRandomNumber(blackList, boxNumber);
    blackList.push(randomNumber)
  }while(blackList.length !== boxNumber)
  
  for(let i = 0; i < boxNumber; i++){
    const box = createElement(blackList[i], parseInt(select.value));
    container.appendChild(box);
  }
})

function createElement(randomNumber, lvl){
  const box = document.createElement("div");
  box.className = "box";
  switch (lvl){
    case 2:
      box.classList.add("lvlmedium");
    break;

    case 3:
      box.classList.add("lvlsimple");
    break;
  }
  box.tagRandomNumber = randomNumber;
  box.addEventListener("click", function(){
    console.log(box.tagRandomNumber);
    box.classList.toggle("clicked");
  })
  return box;
}

function getRandomNumber(limit){
  const number = Math.floor(Math.random() * limit) + 1;
  return number;
}

function verifyRandomNumber(array, limit){
  let number;
  do{
    number = getRandomNumber(limit);
  }while(array.includes(number))
  return number;
}