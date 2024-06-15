let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")

let turnO = true;
let win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [2,5,8],
    [0,3,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const checkWinner = () => {
    for(let i of win) {
        let pos1Val = boxes[i[0]].innerText;
        let pos2Val = boxes[i[1]].innerText;
        let pos3Val = boxes[i[2]].innerText;

        if(pos1Val != "" && pos2Val!= "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                console.log("Winner");
            }
        }

    }
};

