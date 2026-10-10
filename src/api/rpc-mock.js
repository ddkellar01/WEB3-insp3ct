// Local RPC Mock Server for offline inspection and integration testing
export class MockRPCServer {
  constructor() {
    this.mockBlocks = {
      eth_blockNumber: '0x112a880',
      eth_chainId: '0x1'
    };
  }

  handleRequest(method) {
    if (this.mockBlocks[method]) {
      return { jsonrpc: '2.0', result: this.mockBlocks[method], id: 1 };
    }
    return { jsonrpc: '2.0', error: { code: -32601, message: 'Method not found' }, id: 1 };
  }
}
