function getRandomInteger(lower, upper){
    //R = parseInt(rnd * (upper - (lower - 1))+ lower
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random()* multiplier)+ lower;
    return rnd;
}
function initialize(){
    visitOut = document.getElementById("visits");

    if(!sessionStorage.numVisits)
        sessionStorage.numVisits = 0;
    else
        sessionStorage.numVisits++;
        display();
    
}
function display(){
    visitOut.innerHTML = sessionStorage.numVisits;
}