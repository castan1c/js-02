// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
// //Task 1
// for (let i=100;i>=0;i--){
//     console.log(i);
// }
// //Task 2
// for (let i=100;i>=0;i--){
//     if (!(i%2))console.log(i);
// }
// //Task 3
// for (let i=100;i>=0;i-=2){
//     console.log(i);
// }
// let i=0;
// while (i<=100){
//     console.log(i++);
// }
// let i=0;
// do{
//     console.log(i++);
// }while(i>100);
// let num = parseInt(prompt('Please enter a number'));
// while (Number.isNaN(num)) {
//     alert('Not a number!');
//     num = parseInt(prompt('Please enter a number'));
// }
// let num;
// do{
//   num = parseInt(prompt('Please enter a number'));
// }while(Number.isNaN(num));
// let productNames = [];
// productNames[0] = 'Tesla X';
// productNames[1] = 'iPhone 8';
// productNames[2] = 'Banana';
// productNames[10] = 'Toyota';
let productNames = [];
productNames.push('Tesla X');
productNames.push('iPhone 8');
productNames.push('Banana');
productNames.push('Toyota');

// console.log(productNames[2]);
console.log(productNames.length);
// for (let i = 0; i < productNames.length; i++) {
//     console.log(i,productNames[i]);
// }
// productNames.forEach(printEl);
// function printEl(el){
//     console.log(el);
// }
//anonymous:
// productNames.forEach(function (el){
//     console.log(el);
// });
//arrow 
productNames.forEach((el, idx) => {
    console.log(idx, el);
    document.write(idx + '. '+ el+ '<br>');
});
