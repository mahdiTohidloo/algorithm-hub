function missingNumber(arr){
    var n = arr.length+1, 
    sum = 0,
    expectedSum = n* (n+1)/2;
    
    for(var i = 0, len = arr.length; i < len; i++){
      sum += arr[i];
    }
    
    return expectedSum - sum;
}

console.log(missingNumber([1,3,4,5]));