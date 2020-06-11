function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let isNumber = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let number = randomInt(1, 100);
console.log(number);

let userNum;

function guess(str){
    userNum = prompt(str);
    if (!isNumber(userNum)){
        if (userNum == null){
            return null;
        } else {
            alert('ВВОДИТЕ ЧИСЛО!');
            userNum = prompt(str);
        }
    }
}
guess('Угадай число от 1 до 100');

let start = function(){
    function adjustment(n){
        if (n == null){
            return null;
        } else if (n > number){
            guess('меньше!');
            return false;
        } else if (n < number){
            guess('больше!');
            return false;
        } else if (n == number){
            return true;
        }
    }
    let res = adjustment(userNum);
    if (res == null){
        return alert ('Вы отменили игру');
    }
    if (!res){
        let res = adjustment(userNum);
        start();
    } else{
        return alert('вы выиграли');
    }
};
start();
