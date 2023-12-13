function verify () {
    console.log('a, x')
    let a = parseInt(elementA.value);
    let x = parseInt(elementD.value);
    console.log(a, x)

    let xx = a * Math.sqrt(2);

    if (x >= xx){
    result = 'Можно'
    document.getElementById('result').innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
    check = true
    }
    else {
    result = 'Нельзя'
    document.getElementById('result').innerText = messageText + result;
    document.getElementsByName('result')[0].value = result;
    check = true
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

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)