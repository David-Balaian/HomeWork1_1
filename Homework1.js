
// 1. Write a function which receives an array and a number as arguments and returns a new array
// from the elements of the given array which are larger than the given number.
 
function arrayclean(arr,number){
    let newarr=[];
    let len=arr.length;
    for(let i = 0; i<len; i++){
      if(arr[i]>number){
        newarr.push(arr[i]);
      }
    }
      if(newarr.length === 0){return "such values do not exist"}
    return newarr;
   }
   
   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a function, which receives two numbers as arguments and finds all numbers between
// them such that each digit of the number is even. The numbers obtained should be printed in a
// comma-separated sequence on a single line.

function between_numbers(num1, num2){
    let numbers="";
    if(num1>num2){
        let change = num1;
        num1=num2;
        num2=change;
    }
    while(num1<=num2){
        if(is_even_digits(num1)){
            numbers+=num1+", ";
        }
        num1++;
    }
    if(!numbers){
        return "Such numbers does not exist."
    }
    numbers=numbers.substr(0,numbers.length-2);
    return numbers;
}



function is_even_digits(num){
    num=Math.round(num);
    while(num>=1){
        let lastdigit=num%10;
        if(lastdigit%2!==0)return false;
        num=Math.floor(num/10);
    }
    return true;
}
//////////////////////////////////////////////////////////////////////////

// 3. Write a recursive function to determine whether all digits of the number are odd or not.

function is_odd_digits(number){
	number = Math.round(number);
    let lastdigit=number%10;
    if(number === 0){
		return true;
	}
	else if(lastdigit % 2 == 0){ 
        return false;
    }
    else{
        return is_odd_digits(Math.floor(number/10));
    }
}
//////////////////////////////////////////////////////////////////////////

// 4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
// element does not exist, return -1)․

function minpositive(arr){

    let min = (arr[arr.length-1]<0) ? Infinity : arr[arr.length-1];
    
    if (arr.length == 1){
		if(min == Infinity){
			return -1;
		}
        return arr[0];
    }
    if(arr[0] >= 0 && min > arr[0]){
        min = arr[0];
    }
    if(arr[1] >= 0 && min > arr[1]){
        min=arr[1];
    }
    arr.push(min);
    arr.shift();
    arr.shift();
    
    return minpositive(arr);
}
//////////////////////////////////////////////////////////////////////////

// 5. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
// order is violated.

function index(arr){
    let len=arr.length;
    for(let i = 0; i<len; i++){
        if (arr[i-1]>arr[i]){
            return i;
        }
    }
    return -1;
}

//////////////////////////////////////////////////////////////////////////