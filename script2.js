document.addEventListener('DOMContentLoaded', (event) => {
    const countersContainer = document.getElementById('counters');
    const addCounterButton = document.getElementById('addCounter');
    const totalElement = document.getElementById('total');
    let total = 0;

    function updateTotal() {
        totalElement.textContent = total.toString().padStart(4, '0');
    }

    function createCounter() {
        const counterElement = document.createElement('div');
        counterElement.className = 'counter';
        counterElement.innerHTML = `
            <div class="counter-display">0000</div>
            <div class="controls">
                <button class="decrement">-</button>
                <button class="reset">↻</button>
                <button class="increment">+</button>
            </div>
            <button class="delete-button">Delete</button>
        `;
        countersContainer.appendChild(counterElement);

        const display = counterElement.querySelector('.counter-display');
        let count = 0;

        function updateDisplay() {
            display.textContent = count.toString().padStart(4, '0');
        }

        counterElement.querySelector('.increment').addEventListener('click', () => {
            count++;
            total++;
            updateDisplay();
            updateTotal();
        });

        counterElement.querySelector('.decrement').addEventListener('click', () => {
            if (count > 0) {
                count--;
                total--;
            }
            updateDisplay();
            updateTotal();
        });

        counterElement.querySelector('.reset').addEventListener('click', () => {
            total -= count;
            count = 0;
            updateDisplay();
            updateTotal();
        });

        counterElement.querySelector('.delete-button').addEventListener('click', () => {
            total -= count;
            updateTotal();
            countersContainer.removeChild(counterElement);
        });

        updateDisplay();
    }

    addCounterButton.addEventListener('click', createCounter);

});
