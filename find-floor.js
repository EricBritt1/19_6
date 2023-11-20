function findFloor(array, num) {
    if(findFloorRight(array,num) === 0 && findFloorLeft(array,num) === 0) {
        return -1
    }
    return ((findFloorRight(array,num) + findFloorLeft(array, num))/2 )
}

// my version bad
/*function findFloorRight(array, l=0, h=array.length-1, num) {
    while( l <= h) {
        const mid = Math.floor((h+l)/2)
        if(array[mid] === num) {
            if(mid === (array.length-1) || mid < (array.length) && array[mid - 1] === num){
                return mid
            } else {
                h = mid - 1
            }
        } else {
            l = mid + 1
        }
    }
    return -1
}
*/

//chat gpt version
function findFloorRight(array, num, l = 0, h = array.length - 1) {
    while (l <= h) {
        const mid = Math.floor((l + h) / 2);

        if (array[mid] === num) {
            if (mid === array.length - 1 || (mid < array.length - 1 && array[mid + 1] !== num)) {
                return mid;
            } else {
                l = mid + 1;
            }
        } else if (array[mid] < num) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }
    return -1;
}

function findFloorLeft(array, num, l = 0, h = array.length - 1) {
    while (l <= h) {
        const mid = Math.floor((l + h) / 2);

        if (array[mid] === num) {
            if (mid === 0 || (mid > 0 && array[mid - 1] !== num)) {
                return mid;
            } else {
                h = mid - 1;
            }
        } else if (array[mid] < num) {
            l = mid + 1;
        } else {
            h = mid - 1;
        }
    }

    return -1;
}


console.log(findFloor([1,2,0,0,0,0], 2))

module.exports = findFloor