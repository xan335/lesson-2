let balance = 10000

let name = prompt('Как вас зовут?');

    if (name = 'Alex') {
        let account = prompt ('Номер счёта?');

            if (account === 7777) {
                let money = prompt('Сколько обноличить?');

                    if (money <= 10000) {
                        alert('Снял  ' + money + 
                             '. Осталось ' + (balance - money))
                    } else {
                        alert('Недостаточно средств!')
                    }
            } 


    } else {
        alert('Пользователь не найден!')
    }

