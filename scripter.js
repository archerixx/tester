console.log("Custom script loaded successfully");

const ZidAPI = {
  // Purchase event
  purchase_event: function (transactionItems) {
    console.log("Purchase event triggered:", transactionItems);

    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ transactionItems }),
    })
      .then(response => response.json())
      .then(data => console.log("Purchase data sent successfully:", data))
      .catch(error => console.error("Error sending purchase data:", error));
  },

  // Product details event
  product_details_event: function (productViewed) {
    console.log("Product details event triggered:", productViewed);

    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productViewed }),
    })
      .then(response => response.json())
      .then(data => console.log("Product details sent successfully:", data))
      .catch(error => console.error("Error sending product details:", error));
  },

  // Add to cart event
  add_to_cart_event: function (productCart) {
    console.log("Add to cart event triggered:", productCart);

    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productCart }),
    })
      .then(response => response.json())
      .then(data => console.log("Add to cart data sent successfully:", data))
      .catch(error => console.error("Error sending add to cart data:", error));
  },

  // Remove from cart event
  remove_from_cart_event: function (productCart) {
    console.log("Remove from cart event triggered:", productCart);

    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productCart }),
    })
      .then(response => response.json())
      .then(data => console.log("Remove from cart data sent successfully:", data))
      .catch(error => console.error("Error sending remove from cart data:", error));
  },

  // Start checkout event
  start_checkout_event: function (cart) {
    console.log("Start checkout event triggered:", cart);

    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    })
      .then(response => response.json())
      .then(data => console.log("Checkout data sent successfully:", data))
      .catch(error => console.error("Error sending checkout data:", error));
  },
};

// Export the ZidAPI object (for environments that support exports, e.g., Node.js or module bundlers)
if (typeof module !== "undefined" && module.exports) {
  module.exports = ZidAPI;
}
