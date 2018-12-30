const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


function init(event) {
  // your code here
  let index = 0;
  const key = event.key;
  if(key === codes[index]){
    index++;
    if(index === codes.length){
      alert('congratulations to you');
      index = 0;
    }
  }
   else{
     index = 0;
   }
}

let bodyContent = document.querySelector('body');
bodyContent.addEventListener('keydown',init);
