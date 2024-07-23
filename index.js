let button = document.querySelectorAll("button");
// console.log(userbtn);

// get user btn
button.forEach((btn) => {
    btn.addEventListener("click", () => {
        const userchoise = btn.innerText;
        // console.log(userchoise);
        playgame(userchoise);
    })
})

//random ganerating number
const gencompchoise = () => {
    const list = ["Rock", "pepar", "secissors"];
    const randombtn = Math.floor(Math.random() * 3);
    return list[randombtn];
};


//playgame
// match with use and comp  --- main logic
let playgame = (userchoise) => {
    const compchoise = gencompchoise();
    console.log("user choise is", userchoise);
    console.log("com choise is", compchoise);

    if (userchoise === compchoise) {
        // console.log("draw");
        msg.innerText = `Match are draw`;
        msg.style.backgroundColor = "gray";
    }
    else {
        let userwin = true;
        if (userchoise == "Rock") {
            // pepar, secissoes
            userwin = compchoise == "pepar" ? false : true;
        }
        else if (userchoise == "pepar") {
            userwin = compchoise == "secissors" ? false : true;
        }
        else {
            userwin = compchoise == "Rock" ? false : true;
        }
        winshow(userwin);
    }
}

let comp_score = document.querySelector("#comp-score");
let user_score = document.querySelector("#user-score");
let msg = document.querySelector(".msg");
let userscore = 0;
let compcore = 0;
let winshow = (userwin) => {
    if (userwin) {
        // console.log("user win");
        userscore++;
        user_score.innerText = userscore;
        msg.innerText = `you are win`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log("user lose");
        compcore++;
        comp_score.innerText = compcore;
        msg.innerText = `you are lose`;
        msg.style.backgroundColor = "red";

    }
}

