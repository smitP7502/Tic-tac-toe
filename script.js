// let box = document.getElementsByClassName("box");
// let playArea = Array.from(box);

// // store the position of checked squres
// let checked = []
// let squre = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// // Functions are here

// // function check squre filled or not
// let notIn = (num, checked) => {
//     for (let i = 0; i < checked.length; i++) {
//         if (checked[i] == num) {
//             return false;
//         }
//     }
//     return true;
// }

// // function for remove element form the array
// let del = (num) => {
//     for (let i = 0; i < squre.length; i++) {
//         if (num == squre[i]) {
//             squre.splice(i, 1);
//         }
//     }
// }

// // recursive function 
// let randFunc = () => {
//     while (true) {
//         let random = Math.floor(Math.random() * squre.length);
//         if (!notIn(random, squre)) {
//             return random;
//         }
//     }
// }

// // choise of cross and dot
// let player = "";
// let computer = "";
// let play = prompt("Enter your chosise(cross, dot) : ");
// if (play === "cross") {
//     player = "./cross.png";
//     computer = "./dot.png";
// }
// else {
//     player = "./dot.png";
//     computer = "./cross.png";
// }
// // console.log(player, computer);

// // play game
// // console.log(checked.length);
// if (checked.length % 2 == 0) {
//     for (let i = 0; i < 9; i++) {
//         playArea[i].addEventListener("click", () => {
//             if (notIn(i, checked)) {
//                 let sign = document.createElement('img');
//                 sign.src = player;
//                 playArea[i].appendChild(sign);
//                 checked.push(i);
//                 del(i);

//                 console.log(squre, i);
//                 if (squre.length > 0) {

//                     // let rand = randFunc();
//                     let rand = Math.floor(Math.random() * squre.length);
//                     let sign1 = document.createElement('img');
//                     sign1.src = computer;
//                     playArea[rand].appendChild(sign1);
//                     checked.push(rand);
//                     del(rand);
//                     console.log(squre, rand);
//                 }
//             }
//         });
//     }
// }
// // else{
// //     console.log("else");
// // random = Math.floor(Math.random() * squre.length);
// // let sign = document.createElement('img');
// // sign.src = computer;
// // playArea[random].appendChild(sign);
// // checked.push(random);
// // del(random);
// // for (let i = 0; i < 5; i++) {
// //     console.log("i" + i);
// // }
// // }



////////////////////////////////////// New /////////////////////////////////////////

let box = document.getElementsByClassName('box');
let PlayBox = Array.from(box);
let count = 0;
let win = 0;
let c = 0;

// unchedked boxes
let unChecked = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let winningPatternt = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],];
let player = []
let computer = []

// function for remove the checked boxes form the array
let remove = (num) => {
    for (let i = 0; i < unChecked.length; i++) {
        if (unChecked[i] == num) {
            unChecked.splice(i, 1);
            console.log(unChecked);
        }
    }
}

// function for box is checked or not
let InUnChecked = (num) => {
    for (let i = 0; i < unChecked.length; i++) {
        if (num == unChecked[i]) {
            // console.log("true");
            return true;
        }
    }
    // console.log("false");
    return false;
}

// function check which palyer win 
let winner = () => {
    for (let i = 0; i < winningPatternt.length; i++) {
        if (arrayMatch(winningPatternt[i], player)) {
            alert("Player won the game");
            InUnChecked = []
            win++;
            break;
        }
        if (arrayMatch(winningPatternt[i], computer)) {
            alert("Computer won the game");
            InUnChecked = []
            win++;
            break;
        }
    }
}

// function for match arrays
let arrayMatch = (arr1, arr2) => {
    let count = 0;
    if (arr1.length < 3) {
        return false;
    }

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                count = count + 1;
                break;
            }
        }
    }

    if (count == 3) {
        return true;
    }

}

// function for generate random number
let generateRandNum = () => {
    while (true) {
        let rand = Math.floor(Math.random() * unChecked.length);
        let random = unChecked[rand];
        if (InUnChecked(random)) {
            console.log('pass ');
            return random;
        }
        console.log(random);
        console.log(unChecked);
        console.log('fail');
    }
}

// function for relode game
let fun = () => {
    window.location.reload();
}

// choise for the sign
// let choise = prompt("Enter the choise : (cross, dot) ");
let playerSign = "./dot.png";
let computerSign = "./cross.png";
// if (choise === "cross") {
//     playerSign = "./cross.png";
//     computerSign = "./dot.png";
// }
// else {
//     playerSign = "./dot.png";
//     computerSign = "./cross.png";
// }

for (let i = 0; i < 9; i++) {
    PlayBox[i].addEventListener("click", () => {
        if (InUnChecked(i)) {
            let sign = document.createElement('img');
            sign.src = playerSign;
            PlayBox[i].appendChild(sign);
            count++;
            player.push(i);
            remove(i);

            if (unChecked.length > 0) {
                let randomNum = generateRandNum();
                let sign1 = document.createElement('img');
                sign1.src = computerSign;
                PlayBox[randomNum].appendChild(sign1);
                count++;
                computer.push(randomNum);
                remove(randomNum);

            }
            winner();
            if (count == 9 && win == 0) {
                alert("Game draw");
            }
        }
    });
}

// for button 
let cross = document.getElementById('cross');
let dot = document.getElementById('dot');


cross.addEventListener("click", () => {
    if (c === 0) {
        cross.style.border = "4px solid red";
        playerSign = "./cross.png";
        computerSign = "./dot.png";
        c++;
    }
});

dot.addEventListener("click", () => {
    if (c === 0) {
        dot.style.border = "4px solid red";
        playerSign = "./dot.png";
        computerSign = "./cross.png";
        c++;
    }
});
