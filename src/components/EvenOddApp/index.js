// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNum()
    this.setState(prevCount => ({count: prevCount.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countDisplayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="count-card-container">
          <h1 className="count-heading">Count {count}</h1>
          <p className="count-description">Count is {countDisplayText}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase by random number between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
