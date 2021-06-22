let obj = {
  number: 2,
  foo: function(){
    return this.number * 2;
  }
};

console.log(obj.foo()); 


let obj_2 = Object.create(obj);


obj_2.number = 7; 
console.log(obj_2.foo()); 
