var a = [1,5,3,4,5,7,10,-1]

function MergeSort(array) {
    if(array.length < 2) {
        return array;
    }
    
    var middle = parseInt(array.length/2),
        left = array.slice(0, middle),
        right = array.slice(middle);
    
    debug(merge(MergeSort(left), MergeSort(right)));
}

function merge(left, right) {
    var result = [],
        leftLength = left.length,
        rightLength = right.length,
        l = 0,
        r = 0;
    while(l < leftLength && r < rightLength) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    debug(result.concat(left.slice(l)).concat(right.slice(r)));
}
MergeSort(a);