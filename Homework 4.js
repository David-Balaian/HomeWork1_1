

//1. Given an array of integers find the pair of adjacent elements that has the largest product
// and return that product.


function maxProduct(arr){
	let max1 = Math.max(...arr);
	arr.splice(arr.indexOf(max1),1);
	let max2 = Math.max(...arr);
	let min1 = Math.min(...arr);
	arr.splice(arr.indexOf(min1),1);
	let min2 = Math.min(...arr);
	let result = (max1*max2>min1*min2) ? max1 *max2 : min1 * min2;
	return result;
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


function maketree(arr,tree={}){
	
	if(arr[0].parent == null){
		tree[arr[0].id] = {};
		arr.splice(0,1);	
	}
	let keys = Object.keys(tree)
	for(let key of keys){
	for(let i=0; i<arr.length;i++){
		if(arr[i].parent == key){
				tree[key][arr[i].id] = {}
				arr.splice(i,1);
				i--;
			}
		}
	}
	if(arr.length==0){return tree}
	return Object.assign(tree, maketree(arr,tree[keys[0]]));
}
	// 6. Given the list of the following readers:
// [
// { book: &quot;Catcher in the Rye&quot;, readStatus: true, percent: 40},
// { book: &quot;Animal Farm&quot;, readStatus: true, percent: 20},
// { book: &quot;Solaris&quot;, readStatus: false, percent: 90 },
// { book: &quot;The Fall&quot;, readStatus: true, percent: 50 },
// { book: &quot;White Nights&quot;, readStatus: false, percent: 60 } ,
// { book: &quot;After Dark&quot;, readStatus: true, percent: 70 }
// ];


function sort_as_percent(arr){
	return arr.sort((b,a) => {
		if(a.readStatus == true&&b.readStatus==true){return (a.percent - b.percent)};
	})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
