var player1_score = 0; 
var player2_score = 0;
var totalNumber;
var player1_pick;
var player2_pick;

//Initialization Game (game-content)
function initGame(){///Named Functions
    //let numberOfPlayer = document.querySelector('input[name="numberOfPlayer"]:checked').value; //Limited Scope Variables for check the number of player.
    let numberOfPlayer = $('input[name="numberOfPlayer"]:checked').val(); //Limited Scope Variables for check the number of player.
    //reset the keydown Event;
    $(document).unbind();
    $('.playgame').css('display','none');
    console.log($('.playgame'));
    if (numberOfPlayer == 'single'){
        singleGame();
        resetGameContent()
    }
    else if(numberOfPlayer=='dual'){
        dualGame();
        resetGameContent()
    }
    else(
        alert("check the user")
    )

}

function resetGameContent(){
    //Reset the score
    player1_score = 0;
    player2_score = 0;
    //document.getElementById('player1').innerHTML = player1_score;
    $('#player1').text(player1_score);
    //document.getElementById('player2').innerHTML = player2_score;
    $('#player2').text(player2_score);

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
    //let parent = document.getElementById('game-content');
    let parent = $('#game-content');

    //let gameCountSeletor = document.getElementById('gameCount');
    let gameCountSeletor = $('#gameCount');

    /* If there are some layer divs, Delete everything.
    while (parent.hasChildNodes()) {///While Loop
        parent.removeChild(parent.firstChild);
    }
    */
    parent.empty();
    
    //totalNumber = parseInt(gameCountSeletor.options[gameCountSeletor.selectedIndex].value) + 1;//gameCount + 1 (last top div)
    totalNumber = parseInt(gameCountSeletor.val()) + 1;

    for (let i = 1; i <= totalNumber; i++){///For Loop
        let div = $("<div>");
        getIdName(div,i);
        parent.append(div);
    }
}

//get layer divs's id and class & styling layer divs
function getIdName(div,number) {///Named Functions
    switch (number) {
        case(1):
            /*div.id = "first"
            div.className = "layer"*/
            div.attr('id', 'first');
            div.addClass('layer');
            break;
        case(2):
            /*div.id = "second"
            div.className = "layer"*/
            div.attr('id', 'second');
            div.addClass('layer');
            break;
        case(3):
            /*div.id = "third"
            div.className = "layer"*/
            div.attr('id', 'third');
            div.addClass('layer');
            break;
        case(4):
            /*div.id = "fourth"
            div.className = "layer"*/
            div.attr('id', 'fourth');
            div.addClass('layer');
            break;
        case(5):
            /*div.id = "fifth"
            div.className = "layer"*/
            div.attr('id', 'fifth');
            div.addClass('layer');
            break;
        case(6):
            /*div.id = "sixth"
            div.className = "layer"*/
            div.attr('id', 'sixth');
            div.addClass('layer');
            break;
        case(7):
            /*div.id = "seventh"
            div.className = "layer"*/
            div.attr('id', 'seventh');
            div.addClass('layer');
            break;
        case(8):
            /*div.id = "eigth"
            div.className = "layer"*/
            div.attr('id', 'eigth');
            div.addClass('layer');
    }
    let height_Percentage = parseInt(100 / totalNumber);
    //div.style.height = height_Percentage + '%';
    div.css("height",height_Percentage + '%');
    //div.style.width = number * height_Percentage + '%';
    div.css("width",number * height_Percentage + '%');
    //div.style.margin = '0px auto';
    div.css("margin",'0px auto');
}

function singleGame() {///Named Functions
    //Making exmplanation.
    //let parent = document.getElementById('explanation');
    let parent = $('#explanation');
    //parent.style.marginTop = '15px';
    parent.css("marginTop",'15px');
    //parent.style.marginBottom = '150px';
    parent.css("marginBottom","150px");
    /*while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }*/
    parent.empty();
    //Making rock-paper-scissors button.
    //let rock_button = document.createElement('button');
    let rock_button = $('<button>');
    //rock_button.id = 'rock'
    rock_button.attr("id","rock");
    choiceBtn_set(rock_button);
    //let paper_button = document.createElement('button');
    let paper_button = $('<button>');
    //paper_button.id = 'paper'
    paper_button.attr("id","paper");
    choiceBtn_set(paper_button);
    //let scissors_button = document.createElement('button');
    let scissors_button = $('<button>');
    //scissors_button.id = 'scissors';
    scissors_button.attr("id","scissors");
    choiceBtn_set(scissors_button);
    parent.append(rock_button);
    parent.append(paper_button);
    parent.append(scissors_button);
}

//Styling choiceBtn.
function choiceBtn_set(button){///Named Functions
    //button.style.width = '150px';
    button.css("width","150px");
    //button.style.height = '50px';
    button.css("height","50px");
    //button.innerHTML = button.id;
    button.text(button.attr("id"));
    button.css("font-size","18px");
    button.css("margin-bottom","30px");
    button.addClass("text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2");//tailwind
    //If some Btn clicked, game will be started.
    /*button.addEventListener('click',function(){
        player1_pick = button.id;
        //computerPick = player2_pick
        computerPick();
        playGame();
    });*/
    button.click(function(){
        player1_pick = button.attr("id");
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
    //let div = document.getElementById('#'+layer);
    let div = $('#'+layer);
    //let circle = document.createElement('div');
    let circle = $('<div>');
    //circle.className = 'leftCircle';
    circle.addClass('leftCircle');
    //circle.style.width = '100px';
    circle.css("width","100px");
    //circle.style.height = '150px';
    circle.css("height","150px");
    //circle.style.backgroundImage = "url('../img/player1.png')";
    circle.css("backgroundImage","url('../img/player1.png')");
    //circle.style.backgroundSize = 'cover'
    circle.css("backgroundSize","cover");
    //circle.style.position = 'absolute';
    circle.css("position","absolute");
    //circle.style.left = div.offset().left + 10 + 'px';
    circle.css("left",div.offset().left + 10 + 'px');
    //circle.style.top = div.offset().top - parseInt(circle.style.height) + 'px';
    circle.css("top",div.offset().top - parseInt(circle.css("height")) + 'px');
    if (player1_score >= totalNumber-1){
        //circle.style.width = '150px';
        circle.css("width","150px");
        //circle.style.height = '200px';
        circle.css("height","200px");
        //circle.style.backgroundImage = "url('../img/player1Win.png')";
        circle.css("backgroundImage","url('../img/player1Win.png')");
        //circle.style.left =  div.offset().left + parseInt(div.css("width"))/2 - parseInt(circle.style.width)/2 + 'px';
        circle.css("left",div.offset().left + parseInt(div.css("width"))/2 - parseInt(circle.css("width"))/2 + 'px');
        //circle.style.top = div.offset().top - parseInt(circle.style.height) -10 + 'px';
        circle.css("top",div.offset().top - parseInt(circle.css('height')) -10 + 'px');
    }
    //document.getElementById('game-content').appendChild(circle);
    $('#game-content').append(circle);
}

//Same function with getLeftCircle / This one is for the Javascript.
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
    /*      
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
    */
    
    $(document).keydown(function(event){
        console.log(event.keyCode);
        console.log(typeof(event.keyCode));
        switch(event.keyCode){
            case(65):
                player1_pick = "rock";
                player1_pick_show("url('../img/okay.png')");
                break;
            case(83):
                player1_pick = "paper";
                player1_pick_show("url('../img/okay.png')");
                break;
            case(68):
                player1_pick = "scissors";
                player1_pick_show("url('../img/okay.png')");
                break;
            case(74):
                player2_pick = "rock";
                player2_pick_show("url('../img/okay.png')");
                break;
            case(75):
                player2_pick = "paper";
                player2_pick_show("url('../img/okay.png')");
                break;
            case(76):
                player2_pick = "scissors";
                player2_pick_show("url('../img/okay.png')");
                break;  
            case(13):
                playGame();
                break;          
        }
    });

    //let parent = document.getElementById('explanation');
    let parent = $('#explanation');
    //parent.style.marginTop = '15px';
    parent.css('marginTop','15px');
    //parent.style.marginBottom = '30px';
    parent.css('marginBottom','30px');
    /*while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }*/
    parent.empty();
    //Making manual for player1 Keys

    //let player1_div = document.createElement('div');
    /*player1_div.id = 'player1Ex'
    let player1_h1 = document.createElement('h1');
    player1_h1.innerHTML = 'Player1';
    let player1_p = document.createElement('p')
    player1_p.innerHTML = 'A -> Rock <br> S -> Paper <br> D -> Scissors';
    player1_div.appendChild(player1_h1);
    player1_div.appendChild(player1_p);
    parent.appendChild(player1_div);*/
    let player1_div = $('<div id=player1Ex><h1>Player1</h1><p>A -> Rock <br> S -> Paper <br> D -> Scissors</p></div>')
    parent.append(player1_div);
    //Making manual for player2 Key

    let player2_div = document.createElement('div');
    player2_div.id = 'player2Ex';
    let player2_h1 = document.createElement('h1');
    player2_h1.innerHTML = 'Player2';
    let player2_p = document.createElement('p')
    player2_p.innerHTML = 'J -> Rock <br> K -> Paper <br> L -> Scissors';
    player2_div.appendChild(player2_h1);
    player2_div.appendChild(player2_p);
    parent.append(player2_div);
    //document.getElementsByClassName('playgame')[0].style.display = 'block';
    $('.playgame').css('display','block');
    $('.playgame').css('margin','5px auto');
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
    /*
    if (document.getElementById('player1PickImg') != null){
        document.getElementById('player1PickImg').remove();
    }*/
    if ($('#player1PickImg') != null){
        console.log('erase');
        $('#player1PickImg').remove();
    }
    //let div = document.getElementById('scoreBox');
    let div = $('#scoreBox');
    let player1_img = $('<div id=player1PickImg>');
    /*player1_img.id = 'player1PickImg';
    player1_img.style.width = '150px';
    player1_img.style.height = '150px';
    player1_img.style.position = 'absolute'*/
    player1_img.css("width",'150px');
    player1_img.css('height','160px');
    player1_img.css('position','absolute');
    //player1_img.style.left = div.offsetLeft + 'px';
    player1_img.css('left',div.offset().left + 'px');
    //player1_img.style.top = div.offsetTop + div.offsetHeight + 'px';
    player1_img.css('top',div.offset().top + parseInt(div.css('height')) + 'px')
    //player1_img.style.backgroundImage = url;
    player1_img.css('backgroundImage',url);
    //player1_img.style.backgroundSize = 'cover';
    player1_img.css('backgroundSize','cover');
    //document.getElementById('game-content').appendChild(player1_img);
    $('#game-content').append(player1_img);
}

function player2_pick_show(url){
    if (document.getElementById('player2PickImg') != null){
        document.getElementById('player2PickImg').remove();
    }
    let div = document.getElementById('scoreBox');
    let player2_img = document.createElement('div');
    player2_img.id = 'player2PickImg';
    player2_img.style.width = '150px';
    player2_img.style.height = '160px';
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
    player1_score = parseInt($('#player1').text());
    player2_score = parseInt($('#player2').text());
    
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
    //document.getElementById('player1').innerHTML = player1_score;
    $('#player1').text(player1_score);
    //document.getElementById('player2').innerHTML = player2_score;
    $('#player2').text(player2_score);
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
    //document.getElementsByClassName('leftCircle')[0].remove();
    $('.leftCircle')[0].remove();
    //document.getElementsByClassName('rightCircle')[0].remove();
    $('.rightCircle')[0].remove();
    getLeftCircle();
    getRightCircle();
}
