import 'dart:convert';
import 'package:http/http.dart' as http;

class Web3BridgeService {
  final String rpcEndpoint;

  Web3BridgeService({required this.rpcEndpoint});

  Future<Map<String, dynamic>> fetchBlockNumber() async {
    final response = await http.post(
      Uri.parse(rpcEndpoint),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'jsonrpc': '2.0',
        'method': 'eth_blockNumber',
        'params': [],
        'id': 1
      }),
    );
    return jsonDecode(response.body);
  }
}
