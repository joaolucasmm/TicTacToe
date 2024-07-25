import React from 'react'
import './TicTacToe.css'
import o_icon from '../assets/circle.png'
import x_icon from '../assets/X.png'

const TicTacToe = () => {
  return (
    <div className='container'>
        <h1 className='title'>TicTacToe in <span>React</span></h1>
        <div className="board">
        </div>
        <button className="reset">Reset</button>
    </div>
  )
}

export default TicTacToe
