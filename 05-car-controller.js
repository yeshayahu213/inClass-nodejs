import { carService } from './services/car.service.js'

// carService.sayHi()
console.log('global.babaNum :', global.babaNum )
onInit()

function onInit() {
    const res = carService.getCars()
    console.log('res:', res)
    carService.getAns().then(ans => console.log('ans:', ans))
}
