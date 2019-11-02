import React, { Component } from 'react'
import './grid.css'

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coordinates: [0, 0, 0,
                          0, 0, 0,
                          0, 0, 0],
            gameRunning: true,
            winnerCoordinates: []
        }
    };

    makeMove(index) {
        let coordinates = this.state.coordinates.map((item, i) => (i === index.index) ? 1 : item)
        this.setState({ coordinates: coordinates},
            () => this.machineMakesMove())
    }
    machineMakesMove() {
        let coordinates = [...this.state.coordinates]
        let winnerCoords = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let winnerCoordsMapped = winnerCoords.map(elem => elem.map(index => coordinates[index]))
        const amountOfXs = (factor) => winnerCoordsMapped.map(elem => elem.reduce((a, b) => a + b)).indexOf(factor)
        if (amountOfXs(3) > -1) {
            this.setState({ gameRunning: false, winnerCoordinates: winnerCoords[amountOfXs(3)]})
        }
        else if (amountOfXs(2) > -1) {
            let outer = amountOfXs(2)
            let inner = winnerCoordsMapped[amountOfXs(2)].indexOf(0)
            coordinates[winnerCoords[outer][inner]] = -1
        }
        else if (amountOfXs(1) > -1) {
            let outer = amountOfXs(1)
            let inner = winnerCoordsMapped[amountOfXs(1)].indexOf(0)
            coordinates[winnerCoords[outer][inner]] = -1
        }
        this.setState({ coordinates: coordinates })
    }

    render() {
        return (
            <div>
                <div className="grid">
                    {this.state.coordinates.map((coordinate, index) =>
                        <div
                            className={
                                this.state.winnerCoordinates.indexOf(index) > -1 ? "winnerBox" : "box"
                            }
                            onClick={
                                () => coordinate === 0 && this.state.gameRunning ? this.makeMove({ index }) : null}>
                            {(coordinate === 1) ? "X" : (coordinate === -1) ? "O" : ""}
                        </div>)}
                </div>
                <div>
                    {this.state.gameRunning
                        ? "Click to place your X!"
                        : this.state.winnerCoordinates != [] ? "You won!": null}
                </div>
            </div>
        )
    }
}

export default Game
