const eventSource = new EventSource('/live-price');

const priceDisplay = document.getElementById('price-display');

eventSource.onmessage = function(event) {
    const data = JSON.parse(event.data);
    priceDisplay.textContent = data.price;
}

eventSource.onerror = function(err) {
    console.error('EventSource failed:', err);
    eventSource.close();
}