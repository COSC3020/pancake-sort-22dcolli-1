//admittedly I condensed the code that I wrote fromt scratch because I still like how concise this version was
function flip(array, n) {
    for (let i = 0; i < n / 2; i++) {
        let temp = array[i];
        array[i] = array[n - i - 1];
        array[n - i - 1] = temp;
    }
    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    for (let size = array.length; size > 1; size--) {
        let largestElement = 0;
        for (let i = 1; i < size; i++) {
            if (array[i] > array[largestElement]) {
                largestElement = i;
            }
        }
        flip(array, largestElement + 1); 
        flip(array, size); 
    }
    return array;
}
