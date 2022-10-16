let display = document.querySelector(".display");
let btns= document.querySelectorAll('.box');
var operator=null;
var f_operand=null;
var res=null;
var s_operand=null;
var Operations = new Array();

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
function add (a,b){
return a+b;
}
function subtract (a,b){
    return a-b;  
    }

function multiply (a,b){
    return a*b;
    }
function divide (a,b){
    return a/b;   
    }
function operate(operator, a, b ){
    if (operator==='+'){
        return (add(a,b));
    }
    if (operator==='-'){
        return (subtract(a,b));
    }
    if (operator==='*'){
        return (multiply(a,b));
    }
    if (operator==='/'){
        return (divide(a,b));
    }
}
function Parser(string){
    if (Operations[0]===Operations[1]){
             
        string = string.substring(0, string.indexOf(Operations[0])) + '!' + string.substring(string.indexOf(Operations[0]) + 1);
        

    }
    
    let part1= string.split(Operations[Operations.length-1]);
   
    if (part1[0].indexOf('!')>-1){
        part1[0] = part1[0].substring(0, part1[0].indexOf('!')) + Operations[0] + part1[0].substring(part1[0].indexOf('!') + 1);
         }
    let part2 = part1[0].split(Operations[Operations.length-2]);
    
    let operator=Operations[Operations.length-2];
    
   
    let index = Operations.indexOf(operator);
    if (index > -1) { // only splice array when item is found
        Operations.splice(index, 1); // 2nd parameter means remove one item only
    }
    
    return(operate(operator,parseInt(part2[0]),parseInt(part2[1])));

}

for (i of btns){
    i.addEventListener("click",operation);
}

function operation(event){
    
    display.innerHTML+=event.target.innerHTML;
    if (["+","-","/","*","="].includes(event.target.innerHTML)){
        Operations.push(event.target.innerHTML);
        

    }
    if (Operations.length>=2){
      
        
        display.innerHTML=Parser(display.innerHTML)+Operations[Operations.length-1];

    }
    
    
    }
