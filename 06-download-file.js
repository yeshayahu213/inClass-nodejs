import fs from 'fs'
import { utilService } from './services/util.service.js'


const url1 = 'https://yesno.wtf/assets/yes/14-b57c6dc03aa15a4b18f53eb50d6197ee.gif'
const url2 = 'https://yesno.wtf/assets/yes/2-5df1b403f2654fa77559af1bf2332d7a.gif'
const urls = [url1, url2]

const downloadDir = './downloads'
if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir)
}

// utilService.download(url1, `${downloadDir}/myGif.gif`)
//     .then(() => {
//         console.log('Downloaded successfully!')
//     })

onDownload()

function onDownload() {

    const prm1 = utilService.download(url1, `${downloadDir}/myGif1.gif`)
    const prm2 = utilService.download(url2, `${downloadDir}/myGif2.gif`)

    Promise.all([prm1, prm2])
        .then(() => console.log('Downloaded successfully!'))
        .catch(err => console.log('error!'))




    
    // urls.forEach((url, idx) => {
    //     utilService.download(url, `${downloadDir}/myGif${idx + 1}.gif`)
    //         .then(() => {
    //             console.log('Downloaded successfully!')
    //         })
    // })
}


