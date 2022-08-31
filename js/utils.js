
function rectangularCollision({rect1, rect2}) {
    return (
        rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x &&
        rect1.attackBox.position.x <= rect2.position.x + rect2.width &&
        rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y &&
        rect1.attackBox.position.y <= rect2.position.y +rect2.height
        )
}


function determineWinner({player, enemy}){
    timer = 0;
    document.querySelector('#displayText').style.display = 'flex';
    if(player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie';
    } else if (player.health >= enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Player 1 wins!!';
    } else {
        document.querySelector('#displayText').innerHTML = 'Player 2 wins!!';
    }

}

let gameOn = false;
let timer = 60;

function decreaseTimer(){
    gameOn = true;
    setTimeout(decreaseTimer, 1000);
    if(timer > 0) {
        timer --;
        document.querySelector('#timer').innerHTML = timer;
    }

    if (timer == 0){
        determineWinner({player, enemy});
        document.querySelector('#timer').innerHTML = 'start';
        gameOn = false;
    }
}

function resetAll(){
    window.location.reload();
}