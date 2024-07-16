for( let i = 1 ; i<=10 ; i++){

let a = +prompt("Enter first number");
let b = +prompt("Enter second number");
let c = prompt("Which operation you want to perform? Enter 1 for Addition, 2 for subtraction, 3 for multiplication, 4 for division and 5 for modulus")


function calculator(x,y,z){
    switch(z){
        case "1":
            if(Math.random()<0.1){
                alert(x*y);
                break;
            }
            else{
                alert(x+y);
                break;
            }

        case "2":
            if(Math.random()<0.1){
                alert(x/y);
                break;
            }
            else{
                alert(x-y);
                break;
            }

        case "3":
            if(Math.random()<0.1){
                alert(x+y);
                break;
            }
            else{
                alert(x*y);
                break;
            }

        case "4":
            if(Math.random()<0.1){
                alert(x**y);
                break;
            }
            else{
                alert(x/y);
                break;
            }

        case "5":
            if(Math.random()<0.1){
                alert(x/y);
                break;
            }
            else{
                alert(x**y);
                break;
            }
    }
}


calculator(a,b,c);

}    
