function winner(x,y) 
{
    if(x == y )
    {
        return x;
    }
    if(( x == 'r' && y == 'p') || ( x == 'p' && y == 'r'))
    {
        return 'p';
    }

    if(( x == 'r' && y == 's') || ( x == 's' && y == 'r'))
    {
        return 'r';
    }

    if(( x == 'p' && y == 's') || ( x == 's' && y == 'p'))
    {
        return 's';
    }
}

function announce(x,y)
{
    if( x == winner(x,y) && y != winner(x,y))
    {
        alert("You Won!");
    }

    else if( x != winner(x,y) && y == winner(x,y))
    {
        alert("Computer Won!");
    }

    else
    {
        alert("TIE!");
    }
}

function computerRPC() 
{
    let r = Math.floor(Math.random() * 3);

    if (r == 0){
        return 'r';
    }    
    else if (r == 1){
        return 'p';
    }
    else {
        return 's';
    }
}

let a = document.getElementById("rock");
a.onclick = () => {
  let x = 'r';
  let y = computerRPC();
  console.log("user chose ", x);
  console.log("computer chose ", y);
  announce(x,y);
}

let b = document.getElementById("paper");
b.onclick = () => {
  let x = 'p';
  let y = computerRPC();
  console.log("user chose ", x);
  console.log("computer chose ", y);
  announce(x,y);
}

let c = document.getElementById("scissors");
c.onclick = () => {
    let x = 's';
    let y = computerRPC();
    console.log("user chose ", x);
    console.log("computer chose ", y);
    announce(x,y);
}