
function proterm(i,value,x)
{
	let pro = 1;
	for (let j = 0; j < i; j++) {
		pro = pro * (value - x[j]);
	}
	return pro;
}
function dividedDiffTable(x,y,n)
{
	for (let i = 1; i < n; i++) {
		for (let j = 0; j < n - i; j++) {
			y[j][i] = (y[j][i - 1] - y[j + 1]
						[i - 1]) / (x[j] - x[i + j]);
		}
	}
}
function applyFormula(value,x,y,n)
{
	let sum = y[0][0];

	for (let i = 1; i < n; i++) {
	sum = sum + (proterm(i, value, x) * y[0][i]);
	}
	return sum;
}

function printDiffTable(y,n)
{
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i; j++) {
			console.log((y[i][j]).toFixed(6)+"  ");
		}
    console.log("\n");
	}
}
let n = 5;
let value, sum;
var y=[[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
[1,1,1,1,1,1,1,1,1,1,1],
];
let x = [0,20000,40000,60000,80000];
y[0][0] = 9.81;
y[1][0] = 9.7481;
y[2][0] = 9.6879;
y[3][0] = 9.6879;
y[4][0] = 9.5682;
dividedDiffTable(x, y, n);
printDiffTable(y,n);
value = 7;
console.log("\nValue at "+value.toFixed(6)+" is "+applyFormula(value, x, y, n).toFixed(6));

