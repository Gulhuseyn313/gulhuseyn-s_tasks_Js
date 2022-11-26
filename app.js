function add(eded1,eded2,callback){
    let netice= eded1 + eded2
    callback(netice)

}

add(3, 5, console.log)
add(3, 5, alert)


const FormalMeet = (cins, ad) => {
    if (cins === 'k'){
        console.log(`Hallo herr ${ad}`)
    }else if( cins === 'q'){
        console.log( `Hallo frau ${ad}`)
    }
}
FormalMeet('k', 'Hitler')
FormalMeet('q', 'Yeva Braun')