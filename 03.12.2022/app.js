function Car(model, year, company, owner) {
    this.model = model
    this.year = year
    this.company = company
    this.owner = owner
    this.driving = () => {
        console.log(`${owner} ${year}-in ${model}'ini surur`)

    }
}

const obj = new Car('c class', 2022, 'toyota', 'ravan')
const obj1 = new Car('s class', 2020, 'toyota', 'vuqar')
const obj2 = new Car('a class', 2018, 'toyota', 'ulvi')

console.log(obj)
console.log(obj1)
console.log(obj2)

obj.driving()
obj1.driving()
obj2.driving()