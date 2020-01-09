//import { runInThisContext } from "vm"

//
// This is only a SKELETON file for the 'Binary Search' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const array = [1, 2, 5, 6, 8, 18, 24];
const unSortedArray = [1, 7, 9, 4, 3];
function isSorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			return false;
		}
	}
	return true;
}
//binary search requires a sorted array, this exercism has this test case
function binarySearch(arr, value) {
	if (isSorted(arr) == true) {
		let left = 0;
		let right = arr.length - 1;
		let mid = Math.floor((right - left) / 2);
		//set mid point and use math method for rounding
		while (left <= right) {
			if (arr[mid] === value) {
				console.log(value + " found in mid comparison")
				return arr[mid];
			}
			else if (value < arr[mid]) {
				right = mid - 1;
				mid = Math.floor(left + (right - left) / 2);
				// we reset the mid point
			}
			else if (value > arr[mid]) {
				left = mid + 1;
				mid = Math.floor(left + (right - left) / 2);
				//we reset the mid point
			}
		}
		console.log(value + " not found");
	} else {
		console.log("array needs to be sorted");
	}
}



binarySearch(array, 4);
binarySearch(array, 18);
binarySearch(unSortedArray, 5);