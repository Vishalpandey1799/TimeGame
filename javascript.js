let timer = document.querySelector("#timeStart");
let strBtn = document.querySelector(".startBtn");
let count = 0;
let stopButton = document.querySelector(".stopBtn");
let intervalID;
let resetButton = document.querySelector(".resetBtn");
let getTime = document.querySelector(".gettimeBtn");
let records = document.querySelector("#records");
let allClear = document.querySelector(".clearBtn");
let deleted = "";










strBtn.addEventListener("click" , () =>{
     intervalID = setInterval(() =>{
        timer.textContent = count++;
    },1000);
   
});

stopButton.addEventListener("click" , () =>{
 
 clearInterval(intervalID);
});


resetButton.addEventListener("click", () =>{
    count = 0;
  timer.textContent = count;
  clearInterval(intervalID);
});

const maxCapacity = 5;
let newArr = [];

const stopRecord = () =>{
    
        let newPara = document.createElement("p");
        newPara.textContent = `time has stoped at ${count-1}`;
         newArr.push(newPara.innerHTML)
          records.append(newPara);
          localStorage.setItem("Entries",JSON.stringify(newArr));
            
    };


getTime.addEventListener("click",()=>{
    if(count>0){
        stopRecord();
    }

 
});


newArr.forEach((curr)=>{
    if(curr>4){
      getTime.removeEventListener("click",stopRecord());
    }
  });
 

console.log(newArr);



allClear.addEventListener("click" , () => {
    
    records.textContent = deleted;
});

 