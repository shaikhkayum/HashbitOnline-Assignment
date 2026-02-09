function calculateEverything() {
    // Task 1: Even Numbers
    let evens = [];
    for (let i = 1; i <= 100; i++) { 
        if (i % 2 === 0) evens.push(i); 
    }
    document.getElementById('out1').innerText = evens.join(", ");

    // Task 2: Calculator
    let a = parseFloat(document.getElementById('num1').value) || 0;
    let b = parseFloat(document.getElementById('num2').value) || 0;
    let op = document.getElementById('oper').value;
    let calc;
    switch(op) {
        case '+': calc = a + b; break;
        case '-': calc = a - b; break;
        case '*': calc = a * b; break;
        case '/': calc = (b !== 0) ? (a / b).toFixed(2) : "Error (Div by 0)"; break;
    }
    document.getElementById('out2').innerText = "Result: " + calc;

    // Task 3: Tax
  let sal = parseFloat(document.getElementById('salaryInput').value) || 0;
let tax = 0;

switch(true) {
    // 0 >= salary > 500,000
    case (sal > 0 && sal <= 500000): 
        tax = 0; 
        break;

    // 500,000 > salary >= 1,000,000
    case (sal > 500000 && sal <= 1000000): 
        tax = sal * 0.10; 
        break;

    // 1,000,000 > salary >= 1,500,000
    case (sal > 1000000 && sal <= 1500000): 
        tax = sal * 0.20; 
        break;

    // salary > 1,500,000
    case (sal > 1500000): 
        tax = sal * 0.30; 
        break;

    default: 
        tax = 0; 
}
    document.getElementById('out3').innerText = "Tax: ₹" + tax.toLocaleString();

    // Task 4: Sum of Products
    let v1 = Math.abs(parseInt(document.getElementById('n1').value)) || 0;
    let v2 = Math.abs(parseInt(document.getElementById('n2').value)) || 0;
    let total = 0;
    while (v1 > 0 || v2 > 0) {
        total += (v1 % 10) * (v2 % 10);
        v1 = Math.floor(v1 / 10);
        v2 = Math.floor(v2 / 10);
    }
    document.getElementById('out4').innerText = "Result: " + total;
}