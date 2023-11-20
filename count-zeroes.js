//Here is my attempt. Got very messy and unfortunately I wasn't properly handling all possible cases.
/* function countZeroes(array, l=0, h=array.length-1, mid=(h+l)/2) {
    if(array[mid] === 0 && array[mid-1] === 1) {
        return (array.length - 1) - mid
    }
    if(array[mid] === 1 && array[mid+1] === 0) {
        return ((array.length - 1) - (mid+1))
    }
    if(array[mid] === 0 && array[mid-1] !== 1) {
        return countZeroes(array, l, h=(mid-1), mid)
    }
    if(array[mid] === 1 && array[mid+1] !== 0) {
        return countZeroes(array, l=mid+1, h, mid)
    }
};
*/

// Chat gpt generated this version of my function. What I can take away from this
/*

- Chat gpt used a while loop, (l <= h), to continue running the function as long as l doesn't cross h. In binary search theory, if l and h cross it can be assumed that the search was unsuccessful and target value is not in array.
- Mid should just be set as a constant instead of a parameter. It's better to calculate inside the function.
- Used math.floor to ensure that mid is an integer.
- If the while loop is broken because no zeroes were found then we return 0 number of 0s found.

*/
function countZeroes(array, l = 0, h = array.length - 1) {
    while (l <= h) {
        const mid = Math.floor((l + h) / 2);

        if (array[mid] === 0) {
            if (mid === 0 || (mid > 0 && array[mid - 1] === 1)) {
                return array.length - mid;
            } else {
                h = mid - 1;
            }
        } else {
            l = mid + 1;
        }
    }

    return 0; // If no zero is found
}

/* Mid might equal 1. If mid does equal one, check if arr[mid+1] === 0 OR array[mid] === 0 && array[mid-1] === 1. If it does then return array.length - mid. 
If array[mid+1] === 1 then countZeroes(array, 1=mid+1, h, mid=Math.floor((h+l)/2))
*/





console.log(countZeroes([0,0,0,0,0,0,0]))
module.exports = countZeroes