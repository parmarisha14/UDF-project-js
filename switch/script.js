let a=parseInt(prompt("Enter the first number:"));
let b=parseInt(prompt("Enter the second number:"));
let choice=parseInt(prompt(`a is:${a} \n b is:${b} \n Enter your choice(1,2,3,4)`));

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function module(a,b){
    return a%b;
}
switch(choice){
    case 1:
        alert(`Sum of ${a} and ${b} is:${add(a,b)}`);
    break;
    case 2:
        alert(`Subtraction of ${a} and ${b} is:${sub(a,b)}`);
    break;
    case 3:
        alert(`Multiple of ${a} and ${b} is:${mul(a,b)}`);
    break;
    case 4:
        alert(`Division of ${a} and ${b} is:${div(a,b)}`);
    break;
    case 4:
        alert(`Modules of ${a} and ${b} is:${mod(a,b)}`);
    break;
    default:
        alert("Invalid choice!");
}

