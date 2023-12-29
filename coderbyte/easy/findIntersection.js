// split    (str method)
// includes (array method)

function findIntersection(arr) {
    const newArr = arr[0].split(", ")
    console.log(newArr);
    return newArr
}

findIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])