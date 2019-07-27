// 1. Given an array. Write a recursive function that removes the
// first element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)

function ArrRemoveFirst(arr,i=1,arrhelp=[]){
	if(arr.length === 0){
		return arrhelp;	
	}else if (i==arr.length){
        return arrhelp;
    }else{
        arrhelp[i-1]=arr[i];
        return ArrRemoveFirst(arr,i+1,arrhelp);
    }
}

/////////////////////////////////////////////////////


// 2. Given an array of nested arrays. Write a recursive function
// that flattens it. (Hint create function that concats arrays).

function Array_from_arrays(arr=[], i=0){
    if(i==arr.length){
        return arr;
    }
    else if (Array.isArray(arr[i])){
		if(arr[i].length === 0){
			arr.splice(i,1);
		}else{
			arr.splice(i+1, 0, arr[i][arr[i].length-1]);
			arr[i].pop();
		}
		return Array_from_arrays(arr, i);
    }
	else {
		return Array_from_arrays(arr, i+1);
	}

}

/////////////////////////////////////////////////////

// 3. Given a number. Write a function that calculates its sum of
// the digits and if that sum has more than 1 digit find the sum of
// digits of that number. Repeat that process if needed and return the result.


function Sum_Of_Digits(number, sum=0){
	if(number<0 || number!==Math.round(number)){
        return 'invalid argument'
    }
	if (number === 0){
		if (sum>9){
			number = sum;
			return Sum_Of_Digits(number);
		}else{
			return sum;
        }
	}
	else{
		let digit = number % 10;
		sum +=digit; 
		number = Math.floor(number/10);
		return Sum_Of_Digits(number, sum);
		}
}

/////////////////////////////////////////////////////


// 4. Given an object. Invert it (keys become values and values become keys). 
// If there is more than key for that given value create an array.

function Object_Invert(obj = {}){

	for(let key1 in obj){
		for(let key2 in obj){
			if ((obj[key1]==obj[key2]) && (key1!==key2)){
				obj[obj[key2]]=[];
			}
		}
	}
for(let key1 in obj){
	for(let key2 in obj){
		if (Array.isArray(obj[key1])){
			if(obj[key2]==key1){
				obj[key1].push(key2);
				delete obj[key2];
			}
		}
	}
}
for(let key in obj){
	if(!Array.isArray(obj[key])){
		obj[obj[key]]=key;
		delete obj[key];
	}
}

return obj;
}

/////////////////////////////////////////////////////

