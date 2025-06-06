const nameElement = document.getElementById('name');
const isReturning = sessionStorage.getItem('visited');

function typeNameSequence(names, delay = 1000) {
  let current = '';
  let index = 0;

  const interval = setInterval(() => {
    current += (index > 0 ? ' ' : '') + names[index];
    nameElement.textContent = current;
    nameElement.style.visibility = 'visible';
    index++;

    if (index === names.length) {
      clearInterval(interval);
    }
  }, delay);
}

if (!isReturning) {
  sessionStorage.setItem('visited', 'true');
  typeNameSequence(['Sitolo', 'Charles', 'Macdonald']);
} else {
  nameElement.textContent = 'Sitolo Charles Macdonald';
  nameElement.style.visibility = 'visible';
}
