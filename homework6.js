// 1.Given a sorted array and an element from that array.Find the index of that element using binary search


function binarySearch(arr, n) {
    let count = 0;
    let helparr = []
    if (arr.length > 10) {
        let middle = Math.floor(arr.length / 2);
        if (arr[middle] < n) {
            helparr = arr.slice(middle);
            count += middle;
        } else if (arr[middle] > n) {
            helparr = arr.slice(0, middle);
        }
        middle = Math.floor(helparr.length / 2);

        while (helparr.length > 10) {
            if (helparr[middle] < n) {
                helparr.splice(0, middle);
                count += middle;
            } else if (helparr[middle] > n) {
                helparr.splice(middle);
            } else { return middle + count }
            middle = Math.floor(helparr.length / 2);
        }

        for (let i = 0; i < helparr.length; i++) {
            if (helparr[i] == n) { return i + count }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i + count
        }
    }
    return 'no such element in the array'
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