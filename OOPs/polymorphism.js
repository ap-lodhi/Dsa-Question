class Vehical{
    run(n){
        console.log(`Runnig at ${n}KMPH`)
    }
}

class Car extends Vehical{}
class SUV extends Car{}
const suv = new Car()
suv.run(100)