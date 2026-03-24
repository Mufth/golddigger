const eventSource = new EventSource('/live-price');


const priceDisplay = document.getElementById('price-display');
let currentPrice = 0;
eventSource.onmessage = function(event) {
    
    const data = JSON.parse(event.data);
    currentPrice = data.price;
    priceDisplay.textContent = data.price;
};
eventSource.onerror = function(err) {
    console.error('EventSource failed:', err);
    eventSource.close();
};

document.getElementById('invest-btn').addEventListener('click', async () => {
  console.log('Invest button clicked');
  const dialog = document.querySelector('.outputs');
  try {
  const response = await fetch('/buy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price: currentPrice })
  });
  console.log('Fetch request made');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log('Success:', responseData);
  // Optionally, show a confirmation to the user
     dialog.showModal();
  } catch (error) {
    console.error('Error:', error);
    // Optionally, show an error message to the user
  }
});

document.querySelector('.outputs').querySelector('button').addEventListener('click', function() {
        dialog.close();
    });

/* document.addEventListener('DOMContentLoaded', function() {
    const dialog = document.querySelector('.outputs');
    const investBtn = document.querySelector('.invest-btn');

    investBtn.addEventListener('click', function(event) {
        event.preventDefault();
        dialog.showModal();
    });

    dialog.querySelector('button').addEventListener('click', function() {
        dialog.close();
    });
}); */