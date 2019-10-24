import React from 'react';
import './App.scss';
import axios from 'axios';

import Dice from './components/dice/dice';
import Dice2 from './components/dice/dice2';
import { tupleTypeAnnotation } from '@babel/types';



class App extends React.Component {

  state = {
    url: {},
    p1Counter: 0,
    p2Counter: 0,
    p1Height: {
      height: "75px"
    },
    p2Height: {
      height: "75px"
    },
    dice1: true,
    dice2: false,
    p1Visibility: {
      visibility: "hidden"
    },
    p2Visibility: {
      visibility: "hidden"
    },
    num1: null,
    num2: null,
    p1Car: null,
    p1SelectorVis: {
      visibility: "visible"
    },
    p2SelectorVis: {
      visibility: "visible"
    }
  }





  componentDidMount = () => {
    axios.get('http://localhost:8080')
      .then((response) => {
        this.setState({
          url: response.data
        })
      });

      this.setState({initial: true})
  }

  p1Move = (num, initial) => {


    if (initial === false) {
      this.setState({ p1Counter: this.state.p1Counter + num, num1: num })
      this.p1Increment()
    }
    if (this.state.dice1 === true) {
      this.setState({
        dice1: false,
        dice2: true
      })
    }
    if (this.state.dice1 === false) {
      setTimeout(this.setState({
        p1Visibility: {
          visibility: "hidden"
        }
      }), 2000)

      this.setState({
        p2Visibility: {
          visibility: "visible"
        }
      })
    }
  }

  p2Move = (num, initial) => {

    if (initial === false) {
      this.setState({ p2Counter: this.state.p2Counter + num, num2: num })
      this.p2Increment()
    }

    if (this.state.dice2 === true) {
      this.setState({
        dice1: true,
        dice2: false
      })
    }

    if (this.state.dice2 === false) {
      setTimeout(this.setState({
        p2Visibility: {
          visibility: "hidden"
        }
      }), 2000)
    }
    this.setState({
      p1Visibility: {
        visibility: "visible"
      }
    })
  }

  p1Increment = () => {

    const p1Count = this.state.p1Counter
    const change = (75 + (p1Count * 30))
    this.setState({ p1Height: { height: `${change}px` } })

    if (this.state.p1Counter >= 19) {
      setTimeout(function () { alert("P1 WINS!"); }, 100);
    }
  }

  p2Increment = () => {

    const p2Count = this.state.p2Counter
    const change = (75 + (p2Count * 30))
    this.setState({ p2Height: { height: `${change}px` } })

    if (this.state.p2Counter >= 19) {
      setTimeout(function () { alert("P2 WINS!"); }, 100);
    }
  }

  p1Orange = () => {
    this.setState({ p1Car: this.state.url.orange, p1SelectorVis: { visibility: "hidden" } })
  }
  p1Purple = () => {
    this.setState({ p1Car: this.state.url.purple, p1SelectorVis: { visibility: "hidden" } })
  }
  p1Red = () => {
    this.setState({ p1Car: this.state.url.red, p1SelectorVis: { visibility: "hidden" } })
  }
  p1Green = () => {
    this.setState({ p1Car: this.state.url.green, p1SelectorVis: { visibility: "hidden" } })
  }

  p2Orange = () => {
    this.setState({ p2Car: this.state.url.orange, p2SelectorVis: { visibility: "hidden" } })
  }
  p2Purple = () => {
    this.setState({ p2Car: this.state.url.purple, p2SelectorVis: { visibility: "hidden" } })
  }
  p2Red = () => {
    this.setState({ p2Car: this.state.url.red, p2SelectorVis: { visibility: "hidden" } })
  }
  p2Green = () => {
    this.setState({ p2Car: this.state.url.green, p2SelectorVis: { visibility: "hidden" } })
  }

  render() {
    console.log(this.state)
    return (
      <>
        <div className="track-bg"  >
          <div className="abs-box">
            <div className="container">
              <div className="container__left">

                <div className="car-select" style={this.state.p1SelectorVis}>
                  <h4 className="choose">Choose Your Car</h4>
                  <img className="car" src={this.state.url.orange} onClick={this.p1Orange}></img>
                  <img className="car" src={this.state.url.purple} onClick={this.p1Purple}></img>
                  <img className="car" src={this.state.url.red} onClick={this.p1Red}></img>
                  <img className="car" src={this.state.url.green} onClick={this.p1Green}></img>
                </div>
                <div style={this.state.p1Visibility} className="container__left__invis">
                  {/* <div className="control-vis"> */}
                    <h2 className="container__left__p1">P1 Roll</h2>
                    <Dice p1Move={this.p1Move} />
                    
                  {/* </div> */}
                </div>
                <h3 className="container__left__roll">You <br /> rolled <br />{this.state.num1}</h3>
              </div>
              <div className="container__center">
                <div className="container__center--p1" style={this.state.p1Height}>
                  <img className="car" src={this.state.p1Car}></img>
                  <p></p>
                </div>
                <div className="container__center--p2" style={this.state.p2Height}>
                  <img className="car" src={this.state.p2Car}></img>
                </div>
              </div>
              <div className="container__right">
                <div className="car-select" style={this.state.p2SelectorVis}>
                  <h4 className="choose">Choose Your Car</h4>
                  <img className="car" src={this.state.url.orange} onClick={this.p2Orange}></img>
                  <img className="car" src={this.state.url.purple} onClick={this.p2Purple}></img>
                  <img className="car" src={this.state.url.red} onClick={this.p2Red}></img>
                  <img className="car" src={this.state.url.green} onClick={this.p2Green}></img>
                </div>
                <div style={this.state.p2Visibility} className="container__left__invis">
                  <div className="control-vis">
                    <h2 className="container__left__p1">P2 Roll</h2>
                    <Dice2 p2Move={this.p2Move}/>
                  </div>
                  
                </div>
                <h3 className="container__left__roll">You <br /> rolled <br />{this.state.num2}</h3>

              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
