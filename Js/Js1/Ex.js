var a = 20;
var b = 5;

console.log('a =' + a);
console.log("b = "+ b);

function ex1(){
  if(a == b){
    return 3 * (a + b);
  }
  else {
    return (a + b);
  }

}

function ex2(){
  var c = 19;
  if(a > c){
    return 3 * (a - c);
  }
  else {
    return c -a;
  }
}

function Ex3(s){
  var count = 0;
  var sum = 0;
  var index;
  var arr = s.split('');
  var options = ['0','1','2','3','4','5','6','7','8','9'];
  var result = [];

  options.forEach(function(n) {
    arr.forEach(function(star, i) {
      if(star === '*') {
        index = i;
      }
    });
    arr.splice(index, 1, n);

    sum = 0;
    arr.forEach(function(i) {
      sum += Number(i);
    })    

    if (sum % 3 === 0) {
      result.push(arr.join(''));
    }
  });
  return result;
}

function Ex4(s){
  var count = 0;
  var sum = 0;
  var index;
  var arr = s.split('');
  var options = ['0','1','2','3','4','5','6','7','8','9'];
  var result = [];

  options.forEach(function(n) {
    arr.forEach(function(star, i) {
      if(star === '*') {
        index = i;
      }
    });
    arr.splice(index, 1, n);

    sum = 0;
    arr.forEach(function(i) {
      sum += Number(i);
    })    

    if (sum % 3 === 0 && Number(arr[arr.length - 1]) % 2 === 0) {
      result.push(arr.join(''));
    }
  });
  return result;
}

console.log("Ex1: " + ex1());
console.log("Ex2 absolute difference is: " + ex2());
console.log("Ex3  is: " +  Ex3('1234567890*') );
console.log("Ex4  is: " +  Ex4('1234567890*') );