// Question 6 : COMPARISON OPERATOR

function isGreaterThanFive(a){
    return a>5;
    if(a>5){
        console.log("True");
    }
    else{
        console.log("False");
    }
    // return a>5;
}
console.log(isGreaterThanFive(8));


// Question 7 : LOGICAL OPERATOR

function isBetweenOneAndTen(b){
   
    if(b>=1 && b<=10){
        return "true";
    }
    else{
        return "false";
    }
    
}
console.log(isBetweenOneAndTen(23));

// Question 8: IF ELSE STATEMENT

function isEven(c){
    
    if(c%2==0){
        return "even";
    }
    else{
        return "odd";
    }

}
console.log(isEven(4));

// Question 9: TERNARY OPERATOR

function checkage(age){
    return age>=18 ?"adult":"minor";
}
console.log(checkage(18));

// Question 10: SWITCH OPERATOR

function getDayType(n){
        switch(n){
            case 1:
                return "weekday";
                break;
                case 2:
                    return "weekday";
                    break;
                    case 3:
                return "weekday";
                break;
                case 4:
                return "weekday";
                break;
                case 5:
                return "weekday";
                break;
                case 6:
                return "weekend";
                break;
                case 7:
                return "weekend";
                break;
                default: "invalid n";
                break;
        }
}
console.log(getDayType(4));

