class Cars {
    constructor(model, color, wheels){
        this.model = model;
        this.color = color;
        this.wheels = wheels;
    }
    Start(){
        console.log(this.model +' заведена')


        
    }
}
const cars = new Cars('Porsche 911 Turbo S', 'Black', 'Four')
console.log(cars)
cars.Start()


class CarBMW extends Cars {
	constructor(model, color, wheels, hatch) {
		super(model, color, wheels)
        this.hatch = hatch;
	}
    
}
const carbmw = new CarBMW('M5 F90', 'Blue', 'Four','Opens')
console.log(carbmw)
carbmw.Start()

class CarMers extends Cars {
	constructor(model, color, wheels, exhaust) {
		super(model, color, wheels)
        this.exhaust = exhaust;
	}

}
const carmers = new CarMers('C63 AMG', 'White', 'Four', 'Akrapovic')
console.log(carmers)
carmers.Start()


