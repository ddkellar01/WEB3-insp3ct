// Injected directly into main page context to hook window.ethereum and window.solana
(function () {
  const originalRequest = window.ethereum ? window.ethereum.request : null;

  if (window.ethereum && originalRequest) {
    window.ethereum.request = async function (args) {
      window.postMessage({
        type: "WEB3_INSP3CT_PROVIDER",
        method: args.method,
        params: args.params
      }, "*");
      return originalRequest.apply(this, arguments);
    };
    console.log("[WEB3-insp3ct] window.ethereum request interceptor attached.");
  }
})();
