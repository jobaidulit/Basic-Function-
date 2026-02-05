// let registerPassWord = 'abc1238';
// let loginPassWord = 'abc1258';
/*if (registerPassWord===loginPassWord){
    console.log('correct password');
}
else{
    console.log('wrong passwor');
}
    */
  // registerPassWord === loginPassWord ? console.log('correct password'): console.log('wrorng password');

 // let outPut = registerPassWord === loginPassWord ? 'correct pass' : 'wrong';
 // console.log(outPut);



 /*function myFunction (fullname, age){
    console.log('Hello ' + fullname + age);
 }
 myFunction('ali');
 myFunction('subo');
 myFunction('jobaidul',30);
 myFunction('saju');
 */

 //sum return condition
 function sumTwoNumber(num1, num2){
    let sum = num1 + num2;
    let result = sum * 4;
// console.log(result);
if(result %2 ===0){
    return result;
}
else {return "sorry! please try again"}
 }
 let result = sumTwoNumber(2, 5);
 let result1 = sumTwoNumber(2, 8);
 console.log(result, result1);