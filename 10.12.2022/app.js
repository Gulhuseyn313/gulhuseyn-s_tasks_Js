                                       //task1
// A: kele kimi ✅🐂
const repeatedSymbolCounter = (str, letter) => {
    let say = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            say++
        }
    }
    console.log(say)
}
repeatedSymbolCounter("salamFermandeh", "a")

                                        // task2
// A: ogul! ✅
toCapitalCase=(str)=>str[0].toUpperCase() + str.slice(1, str.legth)
console.log(toCapitalCase("salamFermandeh"))

                                        // task 3
// A: done ✅
snakeToKebab = (str) => str.replaceAll('_', '-').toLowerCase()
console.log(snakeToKebab("BU_TEST_UCUNDUR"))

                                        // task 4
// A: done ✅
let txt = 'Alion GreenHeart'
const index =txt.indexOf(' ')
console.log(txt.slice(0,index+2)+'.')
