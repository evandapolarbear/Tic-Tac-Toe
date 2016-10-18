// write String.prototype.mySlice. It should take a start index and an
// (optional) end index.

String.prototype.mySlice = function(startIdx, endIdx) {
  let result = "";
  let i = startIdx;
  if (endIdx < startIdx) {
    return "";
  }
  if (!endIdx) {
    endIdx = this.length;
  }
  if (endIdx > this.length) {
    endIdx = this.length;
  }
  while (i < endIdx) {
    result += this[i];
    i+=1;
  }
  return result;
}


// write Array.prototype.myReduce (analogous to Ruby's Array#inject).

Array.prototype.myReduce = function(func) {
    let result = this.shift();
    this.forEach(el => result = func(result,el))
    return result;
};


// write Array.prototype.quickSort(comparator). Here's a quick refresher if
// you've forgotten how quickSort works:
//   - choose a pivot element from the array (usually the first)
//   - for each remaining element of the array:
//     - if the element is less than the pivot, put it in the left half of the
//     array.
//     - otherwise, put it in the right half of the array.
//   - recursively call quickSort on the left and right halves, and return the
//   full sorted array.

Array.prototype.quickSort = function() {

  if (this.length <=1) {
    return this;
  }
  let result = [];
  let left = [];
  let right = [];
  let pivot = this[0];
  for (i = 1; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i]);
    }
    else {
      right.push(this[i]);
    }
  }
    // result.concat(left.quickSort());
    // result.concat(pivot);
    // result.concat(right.quickSort());
    // return result;
    // let qLeft = [left.quickSort()];
    // let qRight = [right.quickSort()];
    // let qpivot = [pivot]
    // return [qLeft] + [qpivot] + [qRight];
    return left.quickSort().concat(pivot).concat(right.quickSort());
    // return [left.quickSort()] + [pivot] + [right.quickSort()];
}

// write myFind(array, callback). It should return the first element for which
// callback returns true, or undefined if none is found.

function myFind(array,callback) {
  for (i=0;i<array.length;i++) {
    if (callback(array[i])===true) {
      return array[i];
    }
  }
}

// write sumNPrimes(n)
  function isPrime(num) {
    for (i=2; i < num; i++) {
      if (num%i===0) {
        return false;
      }
    }
    return true;
  }

  function sumNPrimes(n) {
    let primes = 0;
    let sum = 0;
    let i = 2;
    while (primes!==n) {
      if (isPrime(i)===true) {
        primes +=1;
        sum +=i;
      }
      i+=1;
    }
    return sum;
  }


// write Function.prototype.myBind.
Function.prototype.myBind = function () {
  
}


// write Function.prototype.inherits.
Function.prototype.inherits = function (parentClass,subClass) {
  // function Surrogate () = new parentClass;
  // Surrogate.prototype = parentClass.prototype;
  // subClass.prototype = Surrogate.prototype;
  // subClass.constructor.prototype = Surrogate.prototype;
}
