#!/bin/bash
# Exit immediately if a command exits with a non-zero status
set -e

echo "=== Step 1: Cleaning Flutter build cache ==="
flutter clean

echo "=== Step 2: Regenerating missing iOS and Android platform files ==="
flutter create . --platforms=ios,android

echo "=== Step 3: Fetching dependencies ==="
flutter pub get

echo "=== Project structure successfully updated! ==="
