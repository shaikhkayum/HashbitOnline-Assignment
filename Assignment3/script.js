const display = document.getElementById('display-area');

function addResult(title, content) {
    const div = document.createElement('div');
    div.className = 'q-wrap';
    div.innerHTML = `<span class="q-text">${title}</span><div class="output">${content}</div>`;
    display.appendChild(div);
}

// Q1: Array of states, remove names starting with vowels
const states = ["Andhra Pradesh", "Maharashtra", "Odisha", "Bihar", "Uttar Pradesh", "Goa", "Gujarat", "Assam"];
const q1Result = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
addResult("Q1: States starting without vowels", q1Result.join(", "));

// Q2: Reverse 'I love my India'
let str2 = 'I love my India';
let q2Result = str2.split(' ').reverse().join(' ');
addResult("Q2: Reversed words", q2Result);

// Q3: Splice 'INDIA' to 'INDONESIA'
let str3 = 'INDIA'.split('');
str3.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
addResult("Q3: Splice INDIA to", str3.join(''));

// Q4: Count Consonants and Vowels (Min 20 chars)
let str4 = "Master of Computer Applications at MIT World Peace University";
let vCount = 0, cCount = 0;
str4.toLowerCase().split('').forEach(char => {
    if(/[aeiou]/.test(char)) vCount++;
    else if(/[a-z]/.test(char)) cCount++;
});
addResult(`Q4: Count in "${str4}"`, `Vowels: ${vCount}, Consonants: ${cCount}`);

// Q5: Replace wrong word function
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
addResult("Q5: Corrected Sentence", correctfn("Java is a wrong language", "wrong", "versatile"));

// Q6: Array filter numbers > 5
let inputArr6 = [1, 2, 3, 9, 10, 7, 5, 4, 3];
let q6Result = inputArr6.filter(n => n > 5);
addResult("Q6: Numbers greater than 5", q6Result.join(", "));

// Q7: Student Averages using Map and Reduce
const students7 = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];
const q7Result = students7.map(s => ({
    name: s.name,
    average: s.scores.reduce((sum, current) => sum + current, 0) / s.scores.length
}));
addResult("Q7: Student Averages", JSON.stringify(q7Result, null, 2));

// Q8: Repeated sum of digits until single digit
function q8RepeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, d) => sum + parseInt(d), 0);
    }
    return num;
}
addResult("Q8: Repeated Sum of 456", q8RepeatedSum(456));

// Q9: Count number of words in a paragraph
function q9CountWords(para) {
    return para.trim().split(/\s+/).length;
}
addResult("Q9: Word count in paragraph", q9CountWords("JavaScript is essential for modern web development."));

// Q10: Reverse a string
function q10Reverse(s) {
    return s.split('').reverse().join('');
}
addResult("Q10: Reverse 'Hello'", q10Reverse("Hello"));

// Q11: Average of Nested Student Objects
const input11 = [
    { student1: { sub1: 44, sub2: 56, sub3: 87, sub4: 97, sub5: 37 } },
    { student2: { sub1: 44, sub2: 56, sub3: 87, sub4: 97, sub5: 37 } },
    { student3: { sub1: 44, sub2: 56, sub3: 87, sub4: 97, sub5: 37 } }
];

const q11Result = input11.map(item => {
    let key = Object.keys(item)[0];
    let scores = Object.values(item[key]);
    let avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return { [key]: { average: avg } };
});
addResult("Q11: Object method averages", JSON.stringify(q11Result, null, 2));