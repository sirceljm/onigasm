const fs = require('fs')
const path = require('path')
const jasmine = require('jasmine-focused');
const {
    loadWASM
} = require('../lib');

loadWASM();

jasmine.executeSpecsInFolder({
    specFolders: [path.join(__dirname, '../spec')]
})
