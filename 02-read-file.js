//* The fs module is a CORE module of node
import fs from 'fs'
// const fs = require('fs') //! old syntax

// demoSync()
demoAsync()

function demoSync() {
    const content = fs.readFileSync('data/data.txt', 'utf8')
    console.log('content:', content)
}


function demoAsync() {
    fs.readFile('data/data.txt', 'utf8', (err, contents) => {
        if (err) return console.log('Cannot read file')
        console.log(contents)
    })
    console.log('after calling readFile')
}
