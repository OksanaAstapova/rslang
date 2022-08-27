export const BASE_SERVER = 'rssslang.herokuapp.com';

export const sprintDescription = `
    Mini game Sprint

    Trains quick translation from English into Russian. You need 
to choose the appropriate translation for the suggested word.`

export function getRandomPage () {
    return Math.round(Math.random()*29);
}

export function audioStart(){
    var song = new Audio();
    song.src = __dirname +'sounds/artquiz_round.mp3';
    song.play();
}
  
export function audioTrue(){
    var song = new Audio();
    song.src = __dirname +'sounds/false.mp3';
    song.play();
}
  
export function audioFalse(){
    var song = new Audio();
    song.src = __dirname +'sounds/true.mp3';
    song.play();
}

export function getRandom () {
    return Math.round(Math.random()) ? true : false;
}
