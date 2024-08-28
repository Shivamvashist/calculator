var eq = '';


function getnum(e){
    var e ;
    eq += e;
    console.log(eq);
    document.getElementById("display").innerText = eq;
}

function del(){
    eq = eq.slice(0,-1);
    document.getElementById("display").innerText = eq;
}

var solve = 0;

function sol(){
    solve += eval(eq);
    console.log(solve);
    eq = solve;
    document.getElementById("display").innerText = eq;
}



