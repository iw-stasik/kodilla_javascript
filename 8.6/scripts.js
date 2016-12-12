function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
		console.log('nieprawidłowe dane');
	} else {
		return (a*h/2);
	}
}
console.log(getTriangleArea(10,6));
var
	triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(4, 12),
	triangle3Area = getTriangleArea(20, 56);
console.log(getTriangleArea(-2,5));