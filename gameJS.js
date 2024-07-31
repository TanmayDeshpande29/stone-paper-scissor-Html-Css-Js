let stone = document.getElementById("stone");
let paper = document.getElementById("paper");
let scr = document.getElementById("scissor");

let you_score = document.getElementById("you-scr-count");
let comp_score = document.getElementById("comp-scr-count");
let final_score = document.getElementById("final-scr");
 
let you_score_style = document.getElementById("you-score");
let comp_score_style = document.getElementById("comp-score");
let final_score_style = document.getElementById("res-sec");


let your_count=0;
let comp_count = 0;

//comp_choices shows the array list of computer choices for stone,paper and scissor . 1=stone, 2=paper and 3=scissor.
//with the help of Math.floor() and math.random() function we have logically generates the random values among 1,2 and 3 for computer.
comp_choices= ["1","2","3"];

//let comp = comp_choices[Math.floor(Math.random() * comp_choices.length)]; //this statement randomly geenrates the one value from the array list.


//user variable for getting the choice of the user.
var user = ""; 

const stn_click = ()=>{

    comp = comp_choices[Math.floor(Math.random() * comp_choices.length)]; //this statement randomly geenrates the one value from the array list.  
    user="1"    
    compareValues(user,comp);
}

const paper_clk = ()=>{

     comp = comp_choices[Math.floor(Math.random() * comp_choices.length)]; //this statement randomly geenrates the one value from the array list.   
     user = "2";   
     compareValues(user,comp);
 }
 
 const scr_clk = ()=>{

     comp = comp_choices[Math.floor(Math.random() * comp_choices.length)]; //this statement randomly geenrates the one value from the array list.
    user = "3";
    compareValues(user,comp);
}


//adding events to the each of the image.
stone.addEventListener("click", stn_click)
paper.addEventListener("click", paper_clk);
scr.addEventListener("click", scr_clk)

 
//below function is to check the multiple winning conditions 
function compareValues(user,comp)
{
    console.log("comp= ",comp);
    console.log("user= ",user);


    //conditions if user selects stone
    if(user=="1" && comp=="1")
    {
        console.log("game tied");
        final_score.innerText = "It's Draw!!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "gray";
        
        

    }
    
    else if(user=="1" && comp=="2")
    {
        comp_count++;
        console.log("computer win");
        final_score.innerText = "Computer Won! Rock Beats Paer!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "red";
    }
    
    else if(user=="1" && comp=="3")
    {
        your_count++;
        console.log("user wins");
        final_score.innerText = "user Won! Rock Beats Scissor!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "rgb(25, 173, 25)";

    }

 //conditions if user selects paper.
    else if(user=="2" && comp=="2")
    {
        console.log("game tied");
        final_score.innerText = "It's Draw!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "gray";
    }

    else if(user=="2" && comp=="1")
    {
         console.log("user wins");
         your_count++;
         final_score.innerText = "User Won! paper Beats Rock!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "rgb(25, 173, 25)";
    }     
    else if(user=="2" && comp=="3")
    {
        comp_count++;
        console.log("computer wins");
        final_score.innerText = "Computer Won! paper Beats scissor!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "red";
    }
    
 //conditions if user selects scissor.  
    else if(user=="3" && comp=="3")
        {
            console.log("game tied");
            final_score.innerText = "It's Draw!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "gray";
        }
    
        else if(user=="3" && comp=="1")
        {
            comp_count++;
             console.log("computer wins");
             final_score.innerText = "Computer Won! scissor Beats stone!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "red";
        }     
        else if(user=="3" && comp=="2")
        {
            your_count++;
            console.log("user wins");
            final_score.innerText = "user Won! scissor Beats Paper!";
        you_score.innerText  = your_count;
        comp_score.innerText = comp_count;
        final_score.style.backgroundColor = "rgb(25, 173, 25)";
        }
           

}






