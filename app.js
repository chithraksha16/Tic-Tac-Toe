
let boxButton=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".mesg-container");
let msg=document.querySelector(".msg");
let count=0;
let drawCount;
const newButton=document.querySelector(".new-btn");
const resetButton=document.querySelector(".reset-btn");
let turnO=true;
const winPattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxButton.forEach((box)=>{
    box.addEventListener("click",()=>{
     if(turnO){
        box.innerText="O"
        turnO=false;
        count++;
     }   else{
        box.innerText="X"
        turnO=true;
        count++
     }
     box.disabled=true;
     checkWinner();
    });
    
});



const checkWinner = ()=>{
for(let pattern of winPattern){
    let pos1Val=boxButton[pattern[0]].innerText;
   let pos2Val= boxButton[pattern[1]].innerText;
   let pos3Val=boxButton[pattern[2]].innerText;


   if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val===pos2Val && pos2Val===pos3Val){
        showWinner(pos1Val);
        disableGame();
        count=0;
    }
    else{drawMatch();}
   }

}
}

const drawMatch=()=>{
    if(count===9){
        msgContainer.classList.remove("hide");
        msg.innerText="Draw";
        count=0;
    }
}



const showWinner = (winner)=>{
msgContainer.classList.remove("hide");
msg.innerText=`Congratulation , Winner is ${winner}`
}
const enableGame=()=>{
    for(let box of boxButton){
        box.disabled=false;
        box.innerText="";
        msgContainer.classList.add("hide");
    }
}
const disableGame=()=>{
    for(let box of boxButton){
        box.disabled=true;
    }
}
const resetGame= ()=>{
    turnO=true;
    enableGame();
    msgContainer.classList.add("hide");
    count=0;
    
   
}
const newGame=()=>{
    turnO=true;
    enableGame();
    msgContainer.classList.add("hide"); 
    count=0;
    
}
newButton.addEventListener("click",newGame);
resetButton.addEventListener("click",resetGame)