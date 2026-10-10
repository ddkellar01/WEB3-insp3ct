#!/usr/bin/env bash
set -e

echo "=========================================="
echo "Starting Clean Flutter iOS Build Process"
echo "=========================================="

# 1. Clean build artifacts and pub cache lock
echo "[1/4] Cleaning previous builds and caches..."
flutter clean
flutter pub cache repair

# 2. Get dependencies
echo "[2/4] Fetching Flutter dependencies..."
flutter pub get

# 3. Install or update CocoaPods
echo "[3/4] Installing CocoaPods dependencies..."
cd ios
# Clean pod lock/cache if necessary
rm -rf Pods Podfile.lock
pod install --repo-update
cd ..

# 4. Run iOS Release Build with verbose logging
echo "[4/4] Building iOS release (no-codesign)..."
flutter build ios --release --no-codesign -v

echo "=========================================="
echo "Build completed successfully!"
echo "=========================================="
