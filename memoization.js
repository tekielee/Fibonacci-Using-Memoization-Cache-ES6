var startTime = (Date.now() % 1000) / 1000;
var count = 0;

function fibonacci(n) {
	count++;
	if(n === 0) {
		return 1;
	} else if(n === 1) {
		return 1;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}

console.log('Fibonacci: ' + fibonacci(30));
console.log('Function called: ' + count + ' times');
var endTime = (Date.now() % 1000) / 1000;
console.log('Start time: ' + startTime + ' End time: ' + endTime + ' Total time: ' + (endTime - startTime).toString());

console.log('Fibonacci Using Memoization Cache');

var startTime = (Date.now() % 1000) / 1000;
var fibCache = [];
var count = 0;

function fibonacciMemoized(n) {
	count++;
	let tmp;
	let tmp1;
	if(n === 0 || n === 1) {
		return 1;
	} else {
		if(fibCache[n - 1]) {
			tmp = fibCache[n - 1];
		} else {
			tmp = fibonacciMemoized(n - 1);
			fibCache[n -1] = tmp;
		}
		if(fibCache[n - 2]) {
			tmp1 = fibCache[n - 2];
		} else {
			tmp1 = fibonacciMemoized(n - 2);
			fibCache[n - 2] = tmp1;
		}
		return tmp + tmp1;
	}
}

console.log('Fibonacci: ' + fibonacciMemoized(30));
console.log('Function called: ' + count + ' times');
var endTime = (Date.now() % 1000) / 1000;
console.log('Start time: ' + startTime + ' End time: ' + endTime + ' Total time: ' + (endTime - startTime).toString());