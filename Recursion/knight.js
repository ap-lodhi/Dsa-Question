// Follow The Knight Ended
// Description

// You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

// You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

// Image


// Input
// Input Format

// Input will consist of three space seperated integers i,j and N

// Constraints

// N < 10


// Output
// Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


// Sample Input 1 

// 3 3 1
// Sample Output 1

// 8 
function Knight(board,n,r,c)
{
    if(r<0||r>9||c<0||c>9)
    {
        return;
    }
    if(n==0)
    {
        board[r][c]=1;
        return;
    }
    Knight(board,n-1,r+2,c-1)
    Knight(board,n-1,r+2,c+1)
    Knight(board,n-1,r-1,c+2)
    Knight(board,n-1,r+1,c+2)
    Knight(board,n-1,r-2,c+1)
    Knight(board,n-1,r-2,c-1)
    Knight(board,n-1,r-1,c-2)
    Knight(board,n-1,r+1,c-2)
}
function runProgram(input){
    input=input.trim().split(" ").map(Number)
    var x=+input[0]-1;
    var y=+input[1]-1;
    var z=+input[2];
    var board=[];
    for(var i=0;i<10;i++)
    {
        var arr=[]
        for(var j=0;j<10;j++)
        {
           arr.push(0)
        }
        board.push(arr)
    }
    Knight(board,z,x,y)
    var count=0;
    for(i=0;i<10;i++)
    {
        for(j=0;j<10;j++)
        {
            if(board[i][j]==1)
            {
                count++;
            }
        }
    }
    console.log(count)
}

 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}