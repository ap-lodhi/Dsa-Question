

// model- 1 month
// model2 - inherit property from model1 and add some more to it 

class Car{
    constructor(brand ,engine,gears){
        this.brand = brand;
        this.wheels=4;
        this.engine=engine;
        this.gears= gears;
    }

    showDetails(){
        console.log(`${this.brand} ${this.engine}`)
    }
}

// const c1 = new Car("TaTA", "BS6" ,6 )
// console.log(c1)   //output - Car { brand: 'TaTA', wheels: 4, engine: 'BS6', gears: 6 }


class SUV extends Car {
  constructor(brand, engine, gears,type,color) {
   super(brand,engine, gears)
   this.type = type;
   this.color= color;

  }

}
// const suv = new SUV("TaTA", "BS6" ,6,"manual", "Blue")
// console.log(suv)

// output = SUV {
//   brand: 'TaTA',
//   wheels: 4,
//   engine: 'BS6',
//   gears: 6,
//   type: 'manual',
//   color: 'Blue'
// }

