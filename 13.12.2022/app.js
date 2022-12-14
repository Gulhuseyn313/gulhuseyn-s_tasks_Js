//-----------------------------------------------------------------
const Massiv = [
    +prompt("enter your numbers"),
    +prompt("enter your numbers"),
    +prompt("enter your numbers")
]
Massiv.length = 5
console.log(Massiv)
//-----------------------------------------------------------------

hasil = () => {
    console.log(Massiv[0] * Massiv[1] * Massiv[2])
}
hasil()
//-----------------------------------------------------------------
multiply = ()=>{
    console.log(Massiv[0]+Massiv[1]+Massiv[2])
}
multiply()
