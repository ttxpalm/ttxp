function generateRandomNumber() {
  const digits = parseInt(document.getElementById('digits').value);
  const min = Math.pow(10, digits - 1);
  const max = Math.pow(10, digits) - 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById('result').innerText = `Number is : ${randomNumber}`;

  addToHistory(randomNumber);
}

function addToHistory(number) {
  let history = JSON.parse(sessionStorage.getItem('history')) || [];
  history.unshift(number); // เพิ่มเลขลงไปที่ตำแหน่งแรกของอาร์เรย์
  if (history.length > 5) {
    history.pop(); // ลบเลขที่ตำแหน่งสุดท้ายของอาร์เรย์ออก
  }
  sessionStorage.setItem('history', JSON.stringify(history));

  displayHistory();
}

function displayHistory() {
  const history = JSON.parse(sessionStorage.getItem('history')) || [];
  const historyElement = document.getElementById('history');
  historyElement.innerHTML = '<h4>History</h4>';
  history.forEach(number => {
    const p = document.createElement('p');
    p.innerText = number;
    historyElement.appendChild(p);
  });
}

function clearHistory() {
  sessionStorage.removeItem('history');
  displayHistory();
}

function clearResult() {
  document.getElementById('result').innerText = '';
}

window.onload = function() {
  displayHistory();
};

