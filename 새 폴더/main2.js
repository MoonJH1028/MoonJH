// for (begin; condition; step)
// begin은 시작할때만. step 까지 하고 난 이후엔 바로 condition으로 돌아가서 조건 파악 후 다시 반복...

//  for (let i =0; i <3; i++){
    // alert(i):
// }

// 이 for이나 if 변수들은 지역변수라고 해서 이 조건문 밖에선 쓸수없음.
// 즉 안에서도, 밖에서도 쓰고싶으면 조건문 안에 const나 let로 정의하지말고 그 위에 먼저 정의해놓을것
// 파이썬과는 달리 무조건 const나 let을 써야 선언이 됨. 즉, 앞의 저런거 없이 a=6 이러면 위에 이미 선언을 했거나 걍 지랄이거나
// for은 반복횟수의 설계. 지성이 있는 반복이고 while은 조건만 맞으면 뇌빼고 무한반복. break 없으면 좆됨


let sum =0;
while (true) {
    let value = +prompt("숫자를 입력하시오", ''); 
    if (!value) break;
    sum += value;
}
alert( '합계:' + sum);

