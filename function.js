// function manav1(){
//     console.log("I am bharat");
// }
// manav1();

// function manav2(name){
//     console.log("hello, i am "+name);
// }
// manav2("Manav");
// var a=10;  
// const manav3 = function (name){
//     console.log("Manav"+name);
//     console.log(a);
// }
// manav3("Manav");

const cal = function(a, b, op){
    if(op == "+"){
        return a+b
    }else if(op == "-"){
        return a-b
    }else if( op == "*"){
        return a*b
    }else if(op == "%"){
        return a%b
    }
}
console.log(cal(2,1,"+"))

let op ="add"
function returnadd (a,b){
    return a+b;
}
if(op == "add"){
    console.log(returnadd(5,3));
}