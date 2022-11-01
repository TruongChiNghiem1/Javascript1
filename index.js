// let array1 = [1,2,3,4];

// let sum1 = arr => {
//     let total = 0;
//     for(let i = 1; i <= arr.length; i++){
//         total += arr[i-1];
//     }
//     return total;
// }

// console.log(sum1(array1))

// const numbers = [1, 2, 3, 4];
// const newArr = numbers.map(myFunction);

// document.getElementById("demo").innerHTML = newArr;

// function myFunction(num) {
//     i++;
//   return num * i;
// }

arr1 = [
{id: 1, item: 'apple', type: 'fruit'},
{id: 2, item: 'banana', type: 'fruit'},
{id: 3, item: 'pen', type: 'stuff'},
{id: 4, item: 'phone', type: 'stuff'}
]

// arr2 = [
//     "<li id='1'>apple</li>",
//     "<li id='2'>banana</li>"
// ]

const arr3 = arr1.filter(arr1 => arr1.type == 'stuff');
const arr2 = arr3.map(myFunction);
function myFunction(item){
    //return [item.id, item.item].join("<li id = ");
    //return "<li id = '" + item.id + "'>" + item.item + "</li>";
    return `<li id = '${item.id}'>${item.item}</li>`;
}

// function dieuKien(item1){
//     let words = arr1.filter(item => arr1.length > 3);
// }

console.log(arr2)