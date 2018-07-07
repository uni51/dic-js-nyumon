// function sample01(){
//   console.log("Hello");
//   console.log("World");
// }

// sample01();

// function sample02(){
//   return "Hello World";
// }

// let comment = sample02();
// console.log(comment);

// let strings = sample02();
// let method = sample02;
// console.log(strings);
// console.log(method);

// let strings = sample02;
// console.log(strings());

// function sample03(name,place){
//   return "Hello" + name + " Welcome to" + place;
// }

// console.log(sample03(" Mr.野呂！"," Dive into Code!!"));

// function sample03(name = " Mr.宮岡！",place = " Dive into Code!!"){
//   return "Hello" + name + " Welcome to" + place;
// }

// console.log(sample03(" Mr.野呂！"," Dive into Code!!"));
// console.log(sample03());

// const noro = {
//   name :  "hiroyoshi",
//   speak : function() {return " Dive into Code!!"; },
// }

// console.log(noro.speak());


// function scope_test01(x){
//   return x + 6;
// };

// console.log(scope_test01(4));
// console.log(scope_test01(x));

// let x = 3;
// function scope_test02(){
//   console.log(x);
//   console.log(y);
// };
// scope_test02();
// let y = 3;

// {
//   let block = 5
//   console.log(block);
// }

// console.log(block);


// {
//   let judge = "safe";
//   console.log(judge);
//   {
//     let judge = "out";
//     console.log(judge);
//   }
//   console.log(judge);
// }
// console.log(judge);

// {
//   let judge = "safe";
//   let check = "safe";
//   console.log(judge);
//   console.log(check);
//   {
//     let judge = "out";
//     console.log(judge);
//     console.log(check);
//   }
// }

// let barrier;
// {
//   let data = {name:"shibata", password:"hogehoge"};
//   barrier = function express(){
//     console.log(data.password);
//     return data;
//   }
// }
// barrier();

// let invasion = barrier();
// invasion.password = "fugafuga";
// barrier();

// let teacher_name = `野呂`;
// let menter_name = `宮岡`;

// function teacher_introduction(){
//   console.log(`私の名前は${teacher_name}です。`);
// };

// function menter_introduction(){
//   console.log(`私の名前は${menter_name}です。`);
// };

// teacher_introduction();
// menter_introduction();

let teacher = {
  name: `野呂`,
};
let menter = {
  name: `宮岡`,
};
function introduction(character){
  console.log(`私の名前は${character.name}です。`);
};
introduction(teacher);
introduction(menter);