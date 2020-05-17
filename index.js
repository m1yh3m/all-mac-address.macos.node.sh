#!/usr/bin/env node

const { execSync } = require('child_process')

console.log(execSync(`ifconfig | grep -v "\t" | awk -F':' '{print $1}' | xargs -n1 networksetup -getmacaddress | grep -v "Error"`).toString())

