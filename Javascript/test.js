let sum = 0; 
const a = [1, 2, 3];
a.forEach(getSum);
function getSum(ele) {
   sum += ele;
}
//console.log(person.getName());
document.write("This is written by JS. " + sum)