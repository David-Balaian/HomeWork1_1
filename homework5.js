
// 1. Write a function, which will receive a number between 0 to 999,999  and spell out
// that number in English.


function spellNumber(num) {
    let obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' };
    let spells = [...num.toString()];
    let result = spells.map((item, i, arr) => {
        if (item == 0) {
            return item = '';
        }
        else if (i == spells.length - 2 || i == spells.length - 5) {
            if (item == 1) {
                item = (arr[i + 1] == 0) ? 'ten' : (arr[i + 1] == 1) ? 'eleven' : (arr[i + 1] == 2) ? 'twelve' : (arr[i + 1] == 3) ? 'thirteen' : (arr[i + 1] == 5) ? 'fifteen' : (arr[i + 1] == 8) ? 'eighteen' : obj[arr[i + 1]] + 'teen';
                arr[i + 1] = '';
            } else {
                item = (item == 2) ? 'twenty' : (item == 3) ? 'thirty' : (item == 5) ? 'fifty' : (item == 8) ? 'eighty' : obj[item] + 'ty';
            }
			if(i == spells.length - 5){
				item+=' thousand'
			}
        }
        else if (i == spells.length - 3 || i == spells.length - 6) {
            item = obj[item] + ' hundred';
        }
        else if (i == spells.length - 4) {
            item = obj[item] + ' thousand';
        }
        else { item = obj[item] }
        return item;
    }).filter(el => el != '').join(' ')
    return result;
}


//////////////////////////////////////////////////////////////////////////////////////////




// 2.Write a JavaScript function to get all possible subsets of length 3 of the given
// array. Assume that all elements in the array are unique.


function subsets3(arr=[]){
	if(arr.length <= 3){
		return arr;
	}
	let res=[];
	let subres = [];
	let len = arr.length;
	for(let k=0; k<len; k++){
		subres.push(arr[k]);
		for(let i=k+1; i<len; i++){
			subres.push(arr[i])
			for(let j=i+1; j<len; j++){
				subres.push(arr[j])
				if(subres.length == 3){res.push([...subres]);subres.pop();}
			}
		subres.pop()}
		
	subres.pop()}
	return res;
    
}
//////////////////////////////////////////////////////////////////////////////////////////


// 3. given a word and a list of possible anagrams. select the correct sublist.

function anagram(str,arr){
	let help = str.split('').sort().join('');
	let helparr = arr.map(item => {return item.split('').sort().join('')})
	let res=[];
	let len = helparr.length;
	for(let i=0; i<len; i++){
		if(helparr[i]==help){
			res.push(arr[i])
		}
	}
return res;
}



// 4) Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array.
// ???????????? Return product of that numbers.??????????????? 
// If there is not any negative number in an array, ignore that one.
//  Check that items of the given array are arrays.

function Product_of_Max_Negative(arr1){
	if(!arr1.every((item) => Array.isArray(item))){
		return "invaild arguments";
	}else{
		let newarr = arr1.map((item) => {return item.reduce((maxNegative,item1) => { if(maxNegative<item1&&item1<0) {maxNegative=item1}return maxNegative},-Infinity)});
		let resarr=newarr.filter((item) => item!=-Infinity);
		if(resarr.length==0){
			return "no negative values";
		}else{
			return resarr.reduce((product,item) => {return product*=item});
		}
	}
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
