// 1. Dark Theme Assignment
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') 
        ? 'Switch to Light Mode' 
        : 'Switch to Dark Mode';
});

// 2. Hide/Show Paragraph Assignment
const targetPara = document.getElementById('targetPara');
const toggleParaBtn = document.getElementById('toggleParaBtn');

toggleParaBtn.addEventListener('click', () => {
    if (targetPara.style.display === 'none') {
        targetPara.style.display = 'block';
        toggleParaBtn.textContent = 'Hide Paragraph';
    } else {
        targetPara.style.display = 'none';
        toggleParaBtn.textContent = 'Show Paragraph';
    }
});

// 3. Div Creation Assignment
const divContainer = document.getElementById('divContainer');
const addDivBtn = document.getElementById('addDivBtn');

addDivBtn.addEventListener('click', () => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('new-box');
    divContainer.appendChild(newDiv);
});

// 4. Dynamic CSS Assignment (Slider & Color Pickers)
const previewBox = document.getElementById('previewBox');
const sizeSlider = document.getElementById('sizeSlider');
const bgColorPicker = document.getElementById('bgColorPicker');
const textColorPicker = document.getElementById('textColorPicker');

// Update font size via slider
sizeSlider.addEventListener('input', (e) => {
    previewBox.style.fontSize = `${e.target.value}px`;
});

// Update Background Color
bgColorPicker.addEventListener('input', (e) => {
    previewBox.style.backgroundColor = e.target.value;
});

// Update Text Color
textColorPicker.addEventListener('input', (e) => {
    previewBox.style.color = e.target.value;
});