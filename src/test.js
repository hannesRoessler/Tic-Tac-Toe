let coordinates = [[0, 1, 1], [0, 1, 0]]
let winnerCoords = [0, 1, 2] // should return 4,5,6
let filteredGrid = coordinates.map(elem => elem.filter((elem, index) => winnerCoords.includes(index)).reduce((a, b) => a + b))

console.log(filteredGrid)



let coordinates = [0, 1, 0, 1, 0, 1, 0, 1, 0]
let winnerCoords = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
let copyWinnerCoords = winnerCoords.map(elem => elem.map(index => coordinates[index]))
const hasAmountOfXs = (factor) => copyWinnerCoords.map(elem => elem.reduce((a,b) => a+b)).indexOf(factor)
    if (hasAmountOfXs(2) > 0) {
        
    }
    else if (hasAmountOfXs(1) > 0) {

    }
    else
    {
        
    }








let coordinates = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let winnerCoords = [[0, 1, 2], [3, 4, 5][6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

let copyWinnerCoords = winnerCoords.map(triple => {
    return triple.map(elem => {
        return elem = coordinates[elem]
    })
})

console.log(winnerCoords)