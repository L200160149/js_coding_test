function lonely(arr) {
    for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            console.log(num);
            return num;
        }
    }
    return 'No lonely Integer'
}

lonely([1,2,3,4,3,2,1])