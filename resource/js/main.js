let array = [
    document.getElementsByClassName('GEN'),
    document.getElementsByClassName('T1'),
    document.getElementsByClassName('HLE'),
    document.getElementsByClassName('DK'),
    document.getElementsByClassName('KT'),
    document.getElementsByClassName('KDF'),
    document.getElementsByClassName('FOX'),
    document.getElementsByClassName('DRX'),
    document.getElementsByClassName('NS'),
    document.getElementsByClassName('BRO'),
    ];

let teamId;

function mouseIn(event){
    teamId = event.target.classList;
    switch(teamId[0]){
        case "GEN": k = 0; break;
        case "T1" : k = 1; break;
        case "HLE": k = 2; break;
        case "DK" : k = 3; break;
        case "KT" : k = 4; break;
        case "KDF": k = 5; break;
        case "FOX": k = 6; break;
        case "DRX": k = 7; break;
        case "NS" : k = 8; break;
        case "BRO": k = 9; break;
    }
    for(let i = 0 ; i < array[k].length; ++i){
        array[k][i].style.backgroundColor = 'grey';
    }
}

function mouseOut(event){
    teamId = event.target.classList;
    switch(teamId[0]){
        case "GEN": k = 0; break;
        case "T1" : k = 1; break;
        case "HLE": k = 2; break;
        case "DK" : k = 3; break;
        case "KT" : k = 4; break;
        case "KDF": k = 5; break;
        case "FOX": k = 6; break;
        case "DRX": k = 7; break;
        case "NS" : k = 8; break;
        case "BRO": k = 9; break;
    }
    for(let i = 0 ; i < array[k].length; ++i){
        array[k][i].style.backgroundColor = '';
    }
}

function addPattern(team){
    for (let i = 0 ; i < team.length; ++i){
        team[i].addEventListener('mouseenter', mouseIn);
        team[i].addEventListener('mouseleave', mouseOut);
    }
}

array.forEach(item => {
    addPattern(item);
});
//addPattern(t1);

//document.getElementsByClassName('dropdown')[0];

//console.log(genG.length);
