document.addEventListener("DOMContentLoaded", function() {
    const constants = [
        { name: 'Значення константи е', value: Math.E },
        { name: 'Значення константи π', value: Math.PI },
        { name: 'Десятковий логарифм постійної Ейлера (е)', value: Math.LOG10E },
        { name: 'Двійковий логарифм постійної Ейлера (е)', value: Math.LOG2E },
        { name: 'Натуральний логарифм числа 10', value: Math.LN10 },
        { name: 'Натуральний логарифм числа 2', value: Math.LN2 },
        { name: 'Корінь квадратний із двох', value: Math.SQRT2 },
        { name: 'Корінь квадратний з однієї другої', value: Math.SQRT1_2 }
    ];

    const functions = [
        { name: 'Натуральний логарифм від e²', value: Math.log(Math.E ** 2) },
        { name: 'Результат обчислення десяткового логарифма від числа 100', value: Math.log10(100) },
        { name: 'Результат обчислення двійкового логарифма від числа 8', value: Math.log2(8) },
        { name: 'Тангенс 45 градусів (з округленням)', value: Math.round(Math.tan(Math.PI / 4)) },
        { name: 'Результат округлення числа 1.00123 у більшу сторону', value: Math.ceil(1.00123) }
    ];

    const randomNum = Math.random();

    const constantsList = document.getElementById('constants-list');
    const functionsList = document.getElementById('functions-list');
    const randomNumberValue = document.getElementById('random-number-value');

    constants.forEach(constant => {
        const li = document.createElement('li');
        li.textContent = `${constant.name} = ${constant.value}`;
        constantsList.appendChild(li);
    });

    functions.forEach(func => {
        const li = document.createElement('li');
        li.textContent = `${func.name}: y = ${func.value}`;
        functionsList.appendChild(li);
    });

    randomNumberValue.textContent = `y = ${randomNum}`;
});
