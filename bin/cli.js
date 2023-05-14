#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const compiler = require('../compiler');

const args = process.argv.slice(2);
if(!fs.existsSync(args.join(path.sep))) {
    console.log('File not found!');
    process.exit(1);
} 

const file = fs.readFileSync(args.join(path.sep), 'utf8');
const characters = file.split('');
compiler(characters)
