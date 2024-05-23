const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const reset = document.querySelector("#reset");

// start.addEventListener("click", (e) => {
//   console.log(e);
// });

    let min = 30;
    let sec = "00";

    rMin = 30;
    rSec = 59;

    

const startFun = () => {
    start.style.display = "none"

//   if (rMin != 30 || rSec != 59) {
//     console.log("true");
//   }

  const display = document.querySelector("#display");

  let timeFun = () => {
    console.log((rSec = rSec - 1));

    rSec < 10? rSec = "0"+rSec: null
        
    if (rSec == 0) {
      rMin = rMin - 1;
      rSec = 59;
    }
    display.innerHTML = `${rMin}:${rSec} `;
  };

   a = setInterval(timeFun, 1000);

  pause.addEventListener("click", () => {
    let tSec = rSec;
    let tMin = rMin;

    rSec = tSec;
    rMin = tMin;
    clearInterval(a);


    start.style.display = "inline"

    // console.log(`${tMin}:${tSec}`);
  });
  
};

reset.addEventListener("click",(e)=>{
    location.reload()
})