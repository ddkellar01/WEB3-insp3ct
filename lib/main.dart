import 'package:flutter/material.dart';

void main() {
  runApp(const Web3Insp3ctApp());
}

class Web3Insp3ctApp extends StatelessWidget {
  const Web3Insp3ctApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'WEB3-insp3ct Mobile',
      theme: ThemeData.dark(),
      home: const InspectorHome(),
    );
  }
}

class InspectorHome extends StatelessWidget {
  const InspectorHome({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('WEB3-insp3ct Mobile Companion')),
      body: const Center(child: Text('Monitoring Web3 RPC & Diagnostics Active.')),
    );
  }
}
