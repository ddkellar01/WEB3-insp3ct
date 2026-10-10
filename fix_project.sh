#!/bin/bash
set -e

echo "Cleaning existing build artifacts and platform files..."
rm -rf ios android .dart_tool build

echo "Regenerating platform files with correct project name (web3_insp3ct)..."
flutter create . --platforms=ios,android --project-name=web3_insp3ct

echo "Getting pub dependencies..."
flutter pub get

echo "Project fix completed successfully!"
