import { Web3RPCInterceptor } from '../src/api/rpc-provider.js';

describe('Web3RPCInterceptor Unit Tests', () => {
  let interceptor;

  beforeEach(() => {
    interceptor = new Web3RPCInterceptor();
  });

  test('should correctly parse and capture valid JSON-RPC 2.0 payloads', () => {
    const mockPayload = { jsonrpc: '2.0', method: 'eth_blockNumber', params: [], id: 1 };
    const result = interceptor.intercept(mockPayload);
    
    expect(result).not.toBeNull();
    expect(result.status).toBe('captured');
    expect(result.method).toBe('eth_blockNumber');
  });

  test('should return null for invalid RPC payloads', () => {
    const result = interceptor.intercept({ invalidKey: true });
    expect(result).toBeNull();
  });
});
