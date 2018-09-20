tsc
uglifyjs-folder -x .js -eo build/compiled/src/orion/ build/compiled/src/orion/
rm -rf dist
mv build/compiled/src/orion dist/
cp -r dist-template/* dist/
cp README.md dist/README.md
rm -rf build
cd dist
npm publish
cd ..
