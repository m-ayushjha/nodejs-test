Solution 1.

var numArray = new Array();
var num = 0;
while(num <= 100) {
  numArray.push(num);
}

Soultion 2. 

var evenArray = new Array();
numArray.forEach(myFunction);

function myFunction(value) {
  let promise = new Promise(function(resolve, reject) {
    if(value % 2 == 0) {
      evenArray.push(value);
      resolve(Math.pow(value, 2)); 
    } else {
      reject();
    }
});
}

solution 3.
// evenArray is an array of even numbers created in solution 1
var evenSquareArray = evenArray.map(fnEvenSqr);
function fnEvenSqr(value) {
  return Math.pow(value, 2);
}

Solution 4.
// sum of square of evenSquareArray
var sum = evenSquareArray.map(sqSum);
function sqSum(value) {
  sum +=value;
}

Solution 5. 

var newEvenArray = new Array();
numArray.forEach(myFunction);
var errors = 0;
function myFunction(value) {
  let promise = new Promise(function(resolve, reject) {
    if(value % 2 == 0) {
      newEvenArray.push(value);
      resolve(Math.pow(value, 2)); 
    } else {
       error += 1;
    }
});
}
// total_errors
console.log(errors);

// resultant array
console.log(newEvenArray);

// resultant array length
console.log(newEvenArray.length);

solution 6.
<button type="button" id="btn" value="abc">

<script>
var button_title = "My Button";
documnet.querySelector("#btn").value = button_title;
</script>

solution 7.
<div class="abc"></div>
<script>
var li = document.createElement("LI");
function listElement() {
  for(i = 0; i< 30; i++){
    var childNode = document.createTextNode(i); 
    li.appendChild(childNode);
  }
  document.querySelector.appendChild(li);
}
</script>

solution 8.

<div class="abc"></div>
<script>
var li = document.createElement("LI");
function listElement() {
  for(i = 0; i< 30; i++){
    if(1%2 == 0) {
      var childNode = document.createTextNode(i); 
      li.appendChild(childNode);
    }
  }
  document.querySelector.appendChild(li);
}

solution 9.

<script> 
  
const promise = new Promise((resolve, reject) => { 
        setTimeout(() => { 
            resolve([1,2,3,4,5,6,7,8,9,0]); 
        }, 1000); 
}); 
  
promise.then(values => { 
    console.log(values[1]); 
}); 
  
</script> 
