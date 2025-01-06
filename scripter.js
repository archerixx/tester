// Purchase event
function handlePurchaseEvent(transactionItems) {
  console.log("Purchase event triggered:", transactionItems);

  // Example: Send data to your endpoint
  fetch("https://myurladdress.app/webhook/AppScript/Test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ transactionItems }),
  })
    .then(response => response.json())
    .then(data => console.log("Purchase data sent successfully:", data))
    .catch(error => console.error("Error sending purchase data:", error));
}

// Product details event
function handleProductDetailsEvent(productViewed) {
  console.log("Product details event triggered:", productViewed);

  // Example: Send data to your endpoint
  fetch("https://myurladdress.app/webhook/AppScript/Test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productViewed }),
  })
    .then(response => response.json())
    .then(data => console.log("Product details sent successfully:", data))
    .catch(error => console.error("Error sending product details:", error));
}

// Add to cart event
function handleAddToCartEvent(productCart) {
  console.log("Add to cart event triggered:", productCart);

  // Example: Send data to your endpoint
  fetch("https://myurladdress.app/webhook/AppScript/Test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productCart }),
  })
    .then(response => response.json())
    .then(data => console.log("Add to cart data sent successfully:", data))
    .catch(error => console.error("Error sending add to cart data:", error));
}

// Remove from cart event
function handleRemoveFromCartEvent(productCart) {
  console.log("Remove from cart event triggered:", productCart);

  // Example: Send data to your endpoint
  fetch("https://myurladdress.app/webhook/AppScript/Test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productCart }),
  })
    .then(response => response.json())
    .then(data => console.log("Remove from cart data sent successfully:", data))
    .catch(error => console.error("Error sending remove from cart data:", error));
}

// Start checkout event
function handleStartCheckoutEvent(cart) {
  console.log("Start checkout event triggered:", cart);

  // Example: Send data to your endpoint
  fetch("https://myurladdress.app/webhook/AppScript/Test", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  })
    .then(response => response.json())
    .then(data => console.log("Checkout data sent successfully:", data))
    .catch(error => console.error("Error sending checkout data:", error));
}
