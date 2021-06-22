
function Action(){
 this.number1 = 5;
 this.number2 = 2;
}

const obj = {
  result(){
   return this.number1 * this.number2;
  } 
}

Action.prototype = obj;

const newObj = new Action();
// console.log(newObj);
console.log(newObj.result());