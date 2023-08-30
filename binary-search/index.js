function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target element at index 'mid'
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target element not found in the array
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const targetElement = 11;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
    console.log(`Found ${targetElement} at index ${resultIndex}`);
} else {
    console.log(`${targetElement} not found in the array`);
}
