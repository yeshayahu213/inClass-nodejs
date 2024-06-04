import fs from 'fs'

main()
function main() {
    writeToFile('data/data.txt', 'Hello POPOPOPO')
        .then(() => console.log('File Written successfully!'))
        .catch(() => console.log('There was an error'))
}


function writeToFile(path, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) return reject()
            resolve()
        })
    })
}