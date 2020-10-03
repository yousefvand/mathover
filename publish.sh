#!/usr/bin/env bash

# Title:         Publish
# Description:   Publish vscode extension
# Author:        Remisa <remisa.yousefvand@gmail.com>
# Date:          2018-11-06
# Version:       1.0.0
# Usage:         bash publish.sh <Personal Access Token>

# This is not the best way to publish a vscode extension.
# Compiled code should be bundled with its dependencies as a single 'js' file.

rm -rf out node_modules package-lock.json
npm i
npm run compile

rm -rf node_modules package-lock.json
npm i --production

# echo "$1" | vsce login Remisa
vsce publish -p $1
