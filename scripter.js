// Self-executing function to avoid polluting the global scope
(function () {
  console.log("Custom ZidAPI script loaded");

  // Define ZidAPI object and functions
  const ZidAPI = {
    // Purchase event handler
    purchase_event: function (transactionItems) {
      console.log("Purchase event triggered:", transactionItems);
      sendData("purchase", { transactionItems });
    },

    // Add to cart event handler
    add_to_cart_event: function (productCart) {
      console.log("Add to cart event triggered:", productCart);
      sendData("add_to_cart", { productCart });
    },

    // Remove from cart event handler
    remove_from_cart_event: function (productCart) {
      console.log("Remove from cart event triggered:", productCart);
      sendData("remove_from_cart", { productCart });
    },

    // Start checkout event handler
    start_checkout_event: function (cart) {
      console.log("Start checkout event triggered:", cart);
      sendData("start_checkout", { cart });
    },
  };

  // Attach ZidAPI functions to the existing global handlers
  if (typeof window !== "undefined") {
    window.purchaseEvent = ZidAPI.purchase_event;
    window.addToCartEvent = ZidAPI.add_to_cart_event;
    window.removeFromCartEvent = ZidAPI.remove_from_cart_event;
    window.startCheckoutEvent = ZidAPI.start_checkout_event;
  }

  // Helper function to send data to your endpoint
  function sendData(eventType, data) {
    fetch("https://4b76-77-78-215-244.ngrok-free.app/webhook/AppScript/Test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ eventType, ...data }),
    })
      .then((response) => response.json())
      .then((result) => console.log(`${eventType} data sent successfully:`, result))
      .catch((error) => console.error(`Error sending ${eventType} data:`, error));
  }
})();
