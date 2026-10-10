#!/bin/bash
set -e

echo "Building WEB3-insp3ct distribution packages..."
mkdir -p dist
zip -r dist/web3-insp3ct-extension.zip extension/
echo "Extension package created successfully at dist/web3-insp3ct-extension.zip"
