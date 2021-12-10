
const player1 = {
    name: 'SCORPION ',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['гуан дао','амигаса','нунчаки'],
    attack: function () {
        console.log(this.name + 'Fight...');
    },
}
const player2 = {
    name: 'SUBZERO ',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['томагавк ','катана','макуауитль','кунаи'],
    attack: function () {
        console.log(this.name + 'Fight...');
    },
}

function createPlayer(player,obj) {

    const divPlayer = document.createElement('div');
    divPlayer.classList.add(player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const divLife = document.createElement('div');
    divLife.classList.add('hp');
    divLife.style.width = obj.hp + '%';

    const divName = document.createElement('div');
    divName.classList.add('divName');
    divName.innerText = obj.name;

    const divCharacter = document.createElement('div');
    divCharacter.classList.add('character');

    const img = document.createElement('img');
    img.src = obj.img;
    divCharacter.appendChild(img);

    const $arenas = document.querySelector(".arenas");

    $arenas.appendChild(divPlayer);
    progressbar.appendChild(divLife);
    progressbar.appendChild(divName);
    divPlayer.appendChild(progressbar);
    divPlayer.appendChild(divCharacter);
}

createPlayer('player1', player1);
createPlayer('player2', player2);


/*
const $player1 = document.createElement('div');
$player1.classList.add('player1');

const $p = document.createElement('p');
$p.innerText = 'Scorpion';

const $img = document.createElement('img');
$img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';

$player1.appendChild($p);
$player1.appendChild($img);

const $root = document.querySelector(".root");
$root.appendChild($player1);
*/


/*
function createPlayer(player,name,hp) {

    const divPlayer = document.createElement('div');
    divPlayer.classList.add(player);

    const progressbar = document.createElement('div');
    progressbar.classList.add('progressbar');

    const divLife = document.createElement('div');
    divLife.classList.add(hp);
    divLife.style.width = '100%';

    const divName = document.createElement('div');
    divName.classList.add(name);
    divName.innerText = name;

    progressbar.appendChild(divLife);
    progressbar.appendChild(divName);

    const divCharacter = document.createElement('div');
    divCharacter.classList.add('character');
    const img = document.createElement('img');
    img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    divCharacter.appendChild(img);

    divPlayer.appendChild(progressbar);
    divPlayer.appendChild(divCharacter);

    const $arenas = document.querySelector(".arenas");
    $arenas.appendChild(divPlayer);

}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUBZERO', 80);*/
