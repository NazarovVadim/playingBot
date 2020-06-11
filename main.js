let isNum = function (n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const game = function(){
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    let count = 10;

    return function repeatPlay() {
        let num = prompt('Угадайте число от 1 до 100!');
        if (isNum(num)) {
            let userNumber = +num;
            count --;
            if (count >= 0) {
                if (userNumber < randomNum) {
                    alert('Загаданное число больше, осталось попыток: ' + count);
                    return repeatPlay();
                } else if (userNumber > randomNum) {
                    alert('Загаданное число меньше, осталось попыток: ' + count);
                    return repeatPlay();
                } else {
                    if (confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")) {
                        game()();
                    } else {
                        alert('Вы завершили игру');
                    }
                }
            } else {
                if (confirm('Попытки закончились, хотите сыграть еще?')) {
                    game()();
                } else {
                    alert('Вы завершили игру');
                }
            }
        } else if (num === null) {
            alert('Вы завершили игру');
        } else {
            return repeatPlay();
        }
    };
};
const startGame = game();
startGame();