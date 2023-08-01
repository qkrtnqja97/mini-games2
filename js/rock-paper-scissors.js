var player1_score = 0; 
var player2_score = 0;
var keyEventController = false;
var totalNumber;
var player1_pick;
var player2_pick;

//Initialization Game (game-content)
function initGame(){///Named Functions
    let numberOfPlayer = document.querySelector('input[name="numberOfPlayer"]:checked').value; //Limited Scope Variables for check the number of player.
    document.getElementsByClassName('playgame')[0].style.display = 'none';
    if (numberOfPlayer == 'single'){
        singleGame();
    }else{
        dualGame();
    }

    //Reset the score
    player1_score = 0;
    player2_score = 0;
    document.getElementById('player1').innerHTML = player1_score;
    document.getElementById('player2').innerHTML = player2_score;

    //Reset the pick
    player1_pick = '';
    player2_pick = '';

    //Reset the layer
    resetLayer();

    player1_pick_show("url('../img/no.png')");
    player2_pick_show("url('../img/no.png')");

    //Set the circle on the bottom layer
    getLeftCircle();
    getRightCircle();

}

function resetLayer(){///Named Functions
    let parent = document.getElementById('game-content');
    let gameCountSeletor = document.getElementById('gameCount');
    //If there are some layer divs, Delete everything.
    while (parent.hasChildNodes()) {///While Loop
        parent.removeChild(parent.firstChild);
    }
    totalNumber = parseInt(gameCountSeletor.options[gameCountSeletor.selectedIndex].value) + 1;//gameCount + 1 (last top div)
    for (let i = 1; i <= totalNumber; i++){///For Loop
        let div = document.createElement('div');
        getIdName(div,i);
        parent.appendChild(div);
    }
}

//get layer divs's id and class & styling layer divs
function getIdName(div,number) {///Named Functions
    switch (number) {
        case(1):
            div.id = "first"
            div.className = "layer"
            break;
        case(2):
            div.id = "second"
            div.className = "layer"
            break;
        case(3):
            div.id = "third"
            div.className = "layer"
            break;
        case(3):
            div.id = "third"
            div.className = "layer"
            break;
        case(4):
            div.id = "fourth"
            div.className = "layer"
            break;
        case(5):
            div.id = "fifth"
            div.className = "layer"
            break;
        case(6):
            div.id = "sixth"
            div.className = "layer"
            break;
        case(7):
            div.id = "seventh"
            div.className = "layer"
            break;
        case(8):
            div.id = "eigth"
            div.className = "layer"
    }
    let height_Percentage = parseInt(100 / totalNumber);
    div.style.height = height_Percentage + '%';
    div.style.width = number * height_Percentage + '%';
    div.style.margin = '0px auto';
}

function singleGame() {///Named Functions
    //Making exmplanation.
    let parent = document.getElementById('explanation');
    parent.style.marginTop = '15px';
    parent.style.marginBottom = '150px';
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    //Making rock-paper-scissors button.
    let rock_button = document.createElement('button');
    rock_button.id = 'rock';
    choiceBtn_set(rock_button);
    let paper_button = document.createElement('button');
    paper_button.id = 'paper'
    choiceBtn_set(paper_button);
    let scissors_button = document.createElement('button');
    scissors_button.id = 'scissors';
    choiceBtn_set(scissors_button);
    parent.appendChild(rock_button);
    parent.appendChild(paper_button);
    parent.appendChild(scissors_button);
}

//Styling choiceBtn.
function choiceBtn_set(button){///Named Functions
    button.style.width = '150px';
    button.style.height = '50px';
    button.innerHTML = button.id;
    //If some Btn clicked, game will be started.
    button.addEventListener('click',function(){
        player1_pick = button.id;
        //computerPick = player2_pick
        computerPick();
        playGame();
    });
}

function computerPick(){///Named Functions
    let random = Math.floor(Math.random()*(3-1)+1);///Built-in method
    if(random == 1){///Logical Operators
        player2_pick = 'rock';
    }
    else if(random == 2){
        player2_pick = 'paper';
    }
    else {
        player2_pick = 'scissors';
    } 
}

function getLeftCircle(){///Named Functions
    let layer = get_circle_loc(player1_score);
    let div = document.querySelector('#'+layer);
    let circle = document.createElement('div');
    circle.className = 'leftCircle';
    circle.style.width = '100px';
    circle.style.height = '150px';
    circle.style.backgroundImage = "url('../img/player1.png')";
    circle.style.backgroundSize = 'cover'
    circle.style.position = 'absolute';
    circle.style.left = div.offsetLeft + 10 + 'px';
    circle.style.top = div.offsetTop - parseInt(circle.style.height) + 'px';
    if (player1_score >= totalNumber-1){
        circle.style.width = '150px';
        circle.style.height = '200px';
        circle.style.backgroundImage = "url('../img/player1Win.png')";
        circle.style.left = circle.style.left = div.offsetLeft + parseInt(div.offsetWidth)/2 - parseInt(circle.style.width)/2 + 'px';
        circle.style.top = div.offsetTop - parseInt(circle.style.height) -10 + 'px';;
    }
    document.getElementById('game-content').appendChild(circle);
}

function getRightCircle(){///Named Functions
    let layer = get_circle_loc(player2_score);
    let div = document.querySelector('#'+layer);
    let circle = document.createElement('div');
    circle.className = 'rightCircle';
    circle.style.width = '100px';
    circle.style.height = '150px';
    circle.style.backgroundImage = "url('../img/player2.png')";
    circle.style.backgroundSize = 'cover';
    circle.style.position = 'absolute';
    circle.style.left = div.offsetLeft + parseInt(div.offsetWidth) - parseInt(circle.style.width) + 'px';///built-in function
    circle.style.top = div.offsetTop - parseInt(circle.style.height) + 'px';;
    if (player2_score >= totalNumber-1){
        console.log('end');
        circle.style.width = '150px';
        circle.style.height = '200px';
        circle.style.backgroundImage = "url('../img/player2Win.png')";
        circle.style.left = circle.style.left = div.offsetLeft + parseInt(div.offsetWidth)/2 - parseInt(circle.style.width)/2 + 'px';
        circle.style.top = div.offsetTop - parseInt(circle.style.height) + 'px';;
    }
    document.getElementById('game-content').appendChild(circle);
}

function get_circle_loc(score){///Named Functions
    let number = totalNumber - score;
    switch(number){
        case (1):
            return 'first' ///Return Statement
        case (2):
            return 'second'
        case (3):
            return 'third'
        case (4):
            return 'fourth'
        case (5):
            return 'fifth'
        case (6):
            return 'sixth'
        case (7):
            return 'seventh'
        case (8):
            return 'eigth'///Return Statement:
    }
}

function dualGame(){          
    if (keyEventController == false){
        document.addEventListener('keydown', (event) => {
            switch(event.code){
                case ("KeyA"):
                    player1_pick = "rock";
                    player1_pick_show("url('../img/okay.png')");
                    break;
                case ('KeyS'):
                    player1_pick = "paper";
                    player1_pick_show("url('../img/okay.png')");
                    break;
                case('KeyD'):
                    player1_pick = "scissors";
                    player1_pick_show("url('../img/okay.png')");
                    break;
                case ('KeyJ'):
                    player2_pick = "rock";
                    player2_pick_show("url('../img/okay.png')");
                    break;
                case ('KeyK'):
                    player2_pick = "paper";
                    player2_pick_show("url('../img/okay.png')");
                    break;
                case('KeyL'):
                    player2_pick = "scissors";
                    player2_pick_show("url('../img/okay.png')");
                    break;
                case('Enter'):
                    playGame();
                    break;
            }
        });
        keyEventController = true;
    }
    let parent = document.getElementById('explanation');
    parent.style.marginTop = '15px';
    parent.style.marginBottom = '30px';
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    //Making manual for player1 Keys
    let player1_div = document.createElement('div');
    player1_div.id = 'player1Ex'
    let player1_h1 = document.createElement('h1');
    player1_h1.innerHTML = 'Player1';
    let player1_p = document.createElement('p')
    player1_p.innerHTML = 'A -> Rock <br> S -> Paper <br> D -> Scissors';
    player1_div.appendChild(player1_h1);
    player1_div.appendChild(player1_p);
    parent.appendChild(player1_div);
    //Making manual for player2 Key
    let player2_div = document.createElement('div');
    player2_div.id = 'player2Ex';
    let player2_h1 = document.createElement('h1');
    player2_h1.innerHTML = 'Player2';
    let player2_p = document.createElement('p')
    player2_p.innerHTML = 'J -> Rock <br> K -> Paper <br> L -> Scissors';
    player2_div.appendChild(player2_h1);
    player2_div.appendChild(player2_p);
    parent.appendChild(player2_div);
    document.getElementsByClassName('playgame')[0].style.display = 'block';
}

function playGame(){///Named Functions
    if (player1_score < totalNumber-1 && player2_score < totalNumber-1){
        show_picks();
        rock_paper_scissors();
    }
    else{
        alert("GameOver");
    }
}

function show_picks(){///Named Functions
    player1_pick_show(select_pick_img(player1_pick));
    player2_pick_show(select_pick_img(player2_pick));
}

function player1_pick_show(url){///Named Functions
    if (document.getElementById('player1PickImg') != null){
        document.getElementById('player1PickImg').remove();
    }
    let div = document.getElementById('scoreBox');
    let player1_img = document.createElement('div');
    player1_img.id = 'player1PickImg';
    player1_img.style.width = '150px';
    player1_img.style.height = '150px';
    player1_img.style.position = 'absolute'
    player1_img.style.left = div.offsetLeft + 'px';
    player1_img.style.top = div.offsetTop + div.offsetHeight + 'px';
    player1_img.style.backgroundImage = url;
    player1_img.style.backgroundSize = 'cover';
    document.getElementById('game-content').appendChild(player1_img);
}

function player2_pick_show(url){
    if (document.getElementById('player2PickImg') != null){
        document.getElementById('player2PickImg').remove();
    }
    let div = document.getElementById('scoreBox');
    let player2_img = document.createElement('div');
    player2_img.id = 'player2PickImg';
    player2_img.style.width = '150px';
    player2_img.style.height = '150px';
    player2_img.style.position = 'absolute'
    player2_img.style.left = div.offsetLeft +div.offsetWidth - 150 + 'px';
    player2_img.style.top = div.offsetTop + div.offsetHeight + 'px';
    player2_img.style.backgroundImage = url;
    player2_img.style.backgroundSize = 'cover';
    document.getElementById('game-content').appendChild(player2_img);
}

function select_pick_img(player_picks){///Named Functions
    if (player_picks == 'rock'){
        return "url(../img/rock.png)"
    }
    else if (player_picks == 'paper'){
        return "url(../img/paper.png)"
    }
    else if (player_picks == 'scissors'){
        return "url(../img/scissors.png)"
    }
    else {
        return "url(../img/no.png)"///Return Statement:
    }
}

function rock_paper_scissors(){///Named Functions
    player1_score = parseInt(document.getElementById('player1').textContent);
    player2_score = parseInt(document.getElementById('player2').textContent);
    
    if (player1_pick == ''){
        alert('player1 did not choose');
    }
    if (player2_pick == ''){
        alert('player2 did not choose');
    }

    if (player1_pick == 'rock'){
        if(player2_pick == 'scissors'){
            player1_score += 1;
            player2_score -= 1;
        }
        else if (player2_pick == 'paper'){
            player1_score -= 1;
            player2_score += 1;
        }
    }
    else if (player1_pick == 'scissors'){
        if (player2_pick == 'paper'){
            player1_score += 1;
            player2_score -= 1;
        }
        else if(player2_pick == 'rock'){
            player1_score -= 1;
            player2_score += 1;
        }
    }
    else if (player1_pick == 'paper'){
        if (player2_pick == 'rock'){
            player1_score += 1;
            player2_score -= 1;
        }
        else if(player2_pick == 'scissors'){
            player1_score -= 1;
            player2_score += 1;
        }
    }
    if (player1_score < 0){
        player1_score = 0;
    }
    if (player2_score < 0){
        player2_score = 0;
    }
    document.getElementById('player1').innerHTML = player1_score;
    document.getElementById('player2').innerHTML = player2_score;
    replace_Circle();
    player1_pick = '';
    player2_pick = '';
    if (player1_score == totalNumber-1 || player2_score == totalNumber-1){
        if (player1_score > player2_score)
            alert('plyaer1 Win!!');
        else
            alert('plyaer2 Win!!');
        
    }
}
   
function replace_Circle(){///Named Functions
    document.getElementsByClassName('leftCircle')[0].remove();
    document.getElementsByClassName('rightCircle')[0].remove();
    getLeftCircle();
    getRightCircle();
}
