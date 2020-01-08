var a = 20;
var b = 5;

console.log("a = " + a);
console.log("b = " + b);

function ex1() {
  if (a === b) {
    return 3 * (a + b);
  }
  return (a + b);
}

function ex2() {
  var c = 19;
  if (a > c) {
    return 3 * (a - c);
  }
  return c - a;
}

function ex3(s) { 
  console.log("Number: " + s);
  var sum = 0;
  var arr = [];  
  var num = s.split('');
  var arr0 = ['0', '3', '6', '9'];
  var arr1 = ['2', '5', '8'];
  var arr2 = ['1', '4', '7'];

  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== "*") {
      sum += Number(s.charAt(i));
    }
  }
  
  if (sum %3 === 0) {
    arr = arr0.map( function(i) {
      return s.replace("*", i)
    });
  } else if (sum %3 === 1) {
    arr = arr1.map( function(i) {
      return s.replace("*", i)
    });
  } else {
    arr = arr2.map( function(i) {
      return s.replace("*", i)
    });
  }
  return arr;
}

function ex4(s) {
  var arr1 = [];
  var a = ex3(s);
  arr1 = a.filter(function(i) {
    return Number(i.charAt(i.length - 1))%2 === 0;
  });
  return arr1;
}

console.log("Ex1: " + ex1());
console.log("Ex2: " + ex2());
console.log("Ex3: " + ex3('1234567890*') );
console.log("Ex4: " + ex4('1234567890*') );
