// Shared Web3 JSON-RPC Request Interceptor Utility
export class Web3RPCInterceptor {
  constructor() {
    this.endpoints = new Set();
  }

  intercept(payload) {
    if (payload && payload.jsonrpc === "2.0") {
      console.log(`[RPC Intercepted] Method: ${payload.method}`, payload.params);
      return { status: "captured", timestamp: Date.now(), ...payload };
    }
    return null;
  }
}
