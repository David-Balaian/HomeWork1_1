// 1.Given a sorted array and an element from that array.Find the index of that element using binary search


function binarySearch(arr,n){
	let start = 0;
	let end = arr.length-1;
	let middle = Math.floor((start+end)/2);
	while(arr[middle]!==n){
		if((middle == 0)||(middle == arr.length-1)){return 'No such element in array'}
		if(arr[middle]<n){
			start = middle;
			middle = Math.ceil((start+end)/2);
		}else{
			end = middle;
			middle = Math.floor((start+end)/2);
		}
	}
	return middle;
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Write a JavaScript function to get all possible subsets of length N of the given array. Assume that all elements in  the array are unique.

function subarrN(arr, n, k = 0, result = [], subresult = []) {
    if (arr.length < n) { return 'There can not be any subarray(s)' }
    for (let i = k; i < arr.length; i++) {
        if (subresult.length < n - 1) {
            subresult.push(arr[i]);
            subarrN(arr, n, k + 1, result, subresult);
            subresult.pop();
            k++;
        } else if (subresult.length == n - 1) {
            subresult.push(arr[i]);
            result.push([...subresult]);
            subresult.pop();
            if (i == arr.length - 1) { return subresult }
        }

    }
    return result;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
