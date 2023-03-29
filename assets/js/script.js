const btnPlay = document.getElementById("btn");

const container = document.querySelector(".container");

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