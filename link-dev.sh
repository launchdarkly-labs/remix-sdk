#!/bin/bash

yarn && yarn build
rm -rf node_modules

mkdir -p example/node_modules
rm -rf example/node_modules/remix-sdk
mkdir -p example/node_modules/remix-sdk/node_modules
mkdir -p example/node_modules/remix-sdk/lib
cp package.json example/node_modules/remix-sdk/package.json
cp -r lib/ example/node_modules/remix-sdk/lib/
