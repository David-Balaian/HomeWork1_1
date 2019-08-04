

// 1) Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array. Return product of that
// numbers.If there is not any negative number in an array, ignore that one. Check that
// items of the given array are arrays.

function Product_of_Max_Negative(arr1){
	if(!arr1.every((item) => Array.isArray(item))){
		return "invaild arguments";
	}else{
		let newarr = arr1.map((item) => { return item.reduce((maxNegative,item1) => { if(maxNegative<item1&&item1<0) {maxNegative=item1}return maxNegative},-Infinity)});
		let resarr=newarr.filter((item) => item!=-Infinity);
		if(resarr.length==0){
			return "no negative values";
		}else{
			return resarr.reduce((product,item) => {return product*=item});
		}
	}
}

//////////////////////////////////////////////////////////////////


// 2) Given an array of strings and numbers. Print the number of integers and the number
// of strings in the array.
function Quantity(arr){
	let string=arr.filter(item => typeof(item)=="string").length;
	let number=arr.length-string;
	return `number: ${number} string: ${string}`
}
/////////////////////////


// 3) Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array.

Sum_Of_Arr = arr =>arr.map(item => {return item.reduce((total,item1) => total+=item1)});

/////////////////////////////////////////////////////////////


// 4) Given an array of integers. Write a function that return new array from first array,
// where removed even numbers, and odd numbers was multiplied with new array
// length


function weirdarray(arr){
	let newarr=arr.filter(item => item % 2 != 0);
	return newarr.map(item => item*=newarr.length)
}



////////////////////////////////////////////////////////////////////////

// 5) Given an array of numbers. Create an array containing only elements once.

function shortarr(arr1){
	return (arr1.filter((item,index) => {return !arr1.includes(item,index+1)}))
}

///////////////////////////////////////////////

// 6) Given an array. Create the array which elements are products between two
// neighbours.


function ProductTwoArrNeighbours(arr){
	let newarr=arr.map((item,index) => { return item*arr[index+1]})
	newarr.pop();
	return newarr
}

////////////////////////////////////////////