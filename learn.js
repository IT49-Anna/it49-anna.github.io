// // Task-1
// alert("hello");

// var sum = 0;

// for(i=4; i<8; i++) {
//     if (i==6) {
//         continue;
//     }
//     sum +=i;
// }
// console.log(sum);

// // Task-2

// // v1
// var depth = prompt('Введите расстояние:');

// var i = 0;

// for (; depth > 0;) {
//     i++;

//     depth -= 7
//     if (depth > 0) {
//         depth +=2
//     }
// }
// console.log(i);

//  // v2  
// var depth = prompt('Введите расстояние:');

// var day = 0;     
// var total = 0;     
// while(total<depth){         
//     day = day + 1;         
//     total = total + 7;         
//     if(total >= depth){             
//         console.log(day);             
//         break;         
//     }         
//     total = total - 2;     
// }

// Task-3

// function contact (name, number) {
//     this.name = name;
//     this.number = number;
//     this.print = function() {
//         console.log((this.name) + ": " + (this.number));
//     }
// }

// var a = new contact("David", 12345);
// var b = new contact("Amy", 987654321);

// a.print();
// b.print();

// Счетчик дней
var start = Date.now();
var endData = new Date(2021, 07, 20);
var elapsed = (endData - start) / 1000;
var min = elapsed / 60;
var hour = min / 60;
var days = Math.floor(hour/ 24);
//alert(days);

// изменение данных в html
let counterHtml = document.getElementById('counter').innerHTML = (days);


