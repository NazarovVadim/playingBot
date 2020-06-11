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
let count = 10;

let start = function(){
    count--;
    function adjustment(n){
        if (count > 0){
            if (n == null){
                return null;
            } else if (n > number){
                guess('меньше! (осталось ' + count + ' попток)');
                return false;
            } else if (n < number){
                guess('больше! (осталось ' + count + ' попток)');
                return false;
            } else if (n == number){
                return true;
            }
        } else {
            return '-1';
        }
    }
    let res = adjustment(userNum);
    count--;
    if (res === '-1'){
        if (!confirm('Ваши попытки закончились. Хотите сыграть еще?')){
            return;
        } else {
            window.location.reload();
            return;
            
        }
        
    }
    else if (res == null){
        return alert ('Вы отменили игру');
    }
    else if (!res){
        let res = adjustment(userNum);
        start();
    } else{
        return alert('вы выиграли');
    }
};
start();
