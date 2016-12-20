var a = 2,
	b = 4,
	value = (a*a) + (2 * a * b) - (b*b);
if (value < 0) {
	console.log('wynik ujemny')
} else if (value > 0) {
	console.log('wynik dodatni')
} else {
	console.log('zero')
}