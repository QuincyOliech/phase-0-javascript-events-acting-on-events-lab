// Your code here

const dodger = document.getElementById('dodger');

document.addEventListener("keydown", function (event){
  if (event.key==='ArrowLeft'){
   moveDodgerLeft(event)
  } else if (event.key==='ArrowRight') {
    moveDodgerRight(event)
  }
}
);
function moveDodgerLeft(event){
  // replacing the px with a string
    const moveLeft = dodger.style.left.replace('px','');
    // // giving it an actual number
    const actualNo = parseInt(moveLeft,10);
    if (actualNo > 0){
    dodger.style.left = `${actualNo-5}px`
    }
}
function moveDodgerRight(event){
    const moveRight = dodger.style.left.replace ('px','');
    const rightNo = parseInt (moveRight,10);
    if (rightNo <= 360){
    dodger.style.left = `${rightNo + 5}px`
    }

}