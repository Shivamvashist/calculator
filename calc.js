var eq = '';


function getnum(a){
    var e = a;
    eq += e;
    console.log(eq);
    document.getElementById("display").innerText = eq;
}

function del(){
    eq = eq.slice(0,-1);
    solve = eq.slice(0,-1);
    document.getElementById("display").innerText = eq;
    console.log(eq);
}

var solve = 0;

function sol(){
    solve = eval(eq);
    console.log(solve);
    eq = ''+solve.toFixed(5);
    document.getElementById("display").innerText = eq;
}



