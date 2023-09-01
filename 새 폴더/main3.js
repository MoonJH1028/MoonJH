// function 함수이름 (복수의, 매개변수는, 콤마로, 구분합니다이)
//  for은 저거 안에 있는거마다 세미클론을 넣는 반면에 함수는 일케 함
// function showmessage() {
    // alert( 'ㅎㅇ');
// }
// showmessage();
// showmessage();



function checkage(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('동의받음?')
    }
}

let age = prompt('나이 말해')
if (checkage(age)) {
    alert("ㅇㅋ");
}