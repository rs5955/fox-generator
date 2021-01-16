const URL = "https://randomfox.ca/floof/?ref=apilist.fun";


function genFox(){
  const dest = document.querySelector("#genLoc");
  if(dest){
    //clear previous fox
    dest.removeChild(dest.childNodes[0]);
  }
  fetch(URL)
  .then(res=>{
    return res.json();
  })
  .then(data=>{
    const toAdd = document.createElement("img");
    toAdd.src = data.image;
    toAdd.width = "500";
    dest.appendChild(toAdd);
  });
}


function main(){
  const btn = document.querySelector("#genBtn");
  btn.addEventListener("click",genFox);
}


document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', genFox);
