window.ZidAPI = {
  // Purchase event
  purchase_event: function (transactionItems) {
    console.log("Purchase event triggered:", transactionItems);
    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionItems }),
    });
  },

  // Add to cart event
  add_to_cart_event: function (productCart) {
    console.log("Add to cart event triggered:", productCart);
    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productCart }),
    });
  },

  // Other event handlers
  // ...
};

console.log("ZidAPI initialized");
