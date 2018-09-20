rm build/compiled -rf
tsc
rm $1 -rf
cp -r dist-template/* build/compiled/src/orion/
cp -r build/compiled/src/orion $1
