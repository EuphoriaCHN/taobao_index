const val = '879969355@qq.com';
// const rex = /\d{1,3}(?=(\d{3})+$)/g;
const rex = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;

// console.log(val.replace(/^(-?)(\d+)((\.\d+)?)$/, function (s, s1, s2, s3) {
//   return s1 + s2.replace(rex, '$&,') + s3;
// }));
// console.log(val.replace(rex, '$&,'));

console.log(rex.test(val));
