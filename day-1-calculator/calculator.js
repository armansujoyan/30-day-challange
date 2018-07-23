document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.ui-button');
    const history = document.querySelector('#history #history-out');
    const current = document.querySelector('#current #output-text');
    let executionLine = "";

    const isAction = function(symbol) {
        return symbol === '+' || symbol === '-' || symbol === '/' || symbol === 'x'
                || symbol === '%';
    }

    const addSymbol = function (symbol) {
        let last = executionLine[executionLine.length-1];
        if (last === '.' && isAction(symbol)) {
            executionLine += '0';
        }
        if (isAction(symbol) && isAction(last)) {
            executionLine = executionLine.replace(/.$/, symbol);
        } else if (last !== symbol) {
            executionLine += symbol;
        }
        else {
            console.error("Symbol is already present")
        }
        if(isAction(symbol))
            current.innerHTML = symbol;
        history.innerHTML = executionLine;
    }

    const evalExp = function (expression){
        console.log("Evaluating.", expression);
        const answer = 'answer';
        history.innerHTML += '=';
        current.innerHTML = answer;
    }

    const addNumber = function(number) {
        let last = executionLine[executionLine.length-1];
        let preLast = executionLine[executionLine.length-2];
        if(isAction(current.innerHTML))
            current.innerHTML = '';
        if (last === '0' && preLast !== '.') {
            executionLine = executionLine.replace(/.$/, number)
        } else {
            executionLine += number;
            current.innerHTML += number;
        }
        history.innerHTML = executionLine;
    }

    for(let button of buttons){
        button.addEventListener('click', function(event) {
            let btnValue = event.target.dataset.value;
            switch(btnValue) {
                case 'clear':
                    executionLine = "";
                    history.innerHTML = '';
                    current.innerHTML = '';
                    break;
                case '0':
                    addSymbol('0');
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    addNumber(btnValue);
                    break;
                case '.':
                case '+':
                case '-':
                case 'x':
                case '/':
                case '%':
                    addSymbol(btnValue)
                    break
                case "execute":
                    evalExp(executionLine);
            }
            console.log(btnValue, executionLine)
        })
    }
});