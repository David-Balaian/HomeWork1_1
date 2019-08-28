

//1. Given an array of integers find the pair of adjacent elements that has the largest product
// and return that product.


function findProd(arr){
	return arr.reduce(((prod,item,i,arr) => {
		if(prod < arr[i]*arr[i+1]){
			return prod =arr[i]*arr[i+1];
		}
		else{
			return prod;
		}
	}),1)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.


betweenMinMax = (arr) =>   Math.max(...arr) -  Math.min(...arr) -arr.length + 1;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Convert a long phrase to its acronym.

function acronym(str){
	let arr = str.split(' ');
	let len = arr.length;
	let res = '';
	for(let i = 0; i<len; i++){
	 res +=arr[i][0];
    }
	return res.toUpperCase();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 4. Given a string of digits, output all the contiguous substrings of length n in that string.

///////////returning array////////////////////////
function substrings(str, n){
	if(n>=str.length){return 'invaild arguments'}
	let res = [];
	for(let i=0; i<str.length;i++){
		let item = str.substr(i,n);
			if(item&&item.length == n){
				res.push(item);
			}
	}
	
	return res 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////



// 5. Create a function that builds a tree like object given an array with object which contains
// parent and id properties.


function maketree(arr,tree={},haveprop = undefined){
	if(arr[0].parent == null){tree[arr[0].id]={};arr.splice(0,1);}
	if(haveprop!=undefined){tree[haveprop] = {}}
	let keys = Object.keys(tree);
	for(let key of keys){
		for(let elem of arr){
			if(elem.parent == key){
				tree[key] = maketree(arr,tree[key],elem.id); 
			}
		}
	}
	return tree;
}
	// 6. Given the list of the following readers:
// [
// { book: 'Catcher in the Rye', readStatus: true, percent: 40},
// { book: 'Animal Farm', readStatus: true, percent: 20},
// { book: 'Solaris', readStatus: false, percent: 90 },
// { book: 'The Fall', readStatus: true, percent: 50 },
// { book: 'White Nights', readStatus: false, percent: 60 } ,
// { book: 'After Dark', readStatus: true, percent: 70 }
// ];

// Output the books sorted by the percent in descending order which readStatus is true.

function sort_as_percent(arr){
	arr.sort((a,b) => {return b.percent-a.percent})
	.forEach(item => {if(item.readStatus == true){console.log(item.book)}});
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
