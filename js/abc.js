function verify () {
    console.log('a, d')
    let a = parseInt(elementA.innerText);
    let x = parseInt(elementD.innerText);
    console.log(a, x)

    let low, high

    let xx = a * Math.sqrt(2);

    if (x >= xx){
    result = 'Можно'
    document.getElementById('result').innerText = result;

    }
    else {
    result = 'Нельзя'
    document.getElementById('result').innerText = result;

    }

}

const elementA = document.getElementById('a');
const elementD = document.getElementById('x');

const elementVerify = document.getElementById('verify');
elementVerify.addEventListener('click', verify)



function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;