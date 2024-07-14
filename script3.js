document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', function(e) {
            const value = e.target.getAttribute('data-value');
            if (value === 'clear') {
                display.innerText = '0';
            } else if (value === '=') {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            } else {
                if (display.innerText === '0' || display.innerText === 'Error') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
            }
        });
    });
});
