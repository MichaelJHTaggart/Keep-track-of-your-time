import React, { Component } from "react";
import axios from 'axios'
import "../App.css";

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            timerOn: false,
            timerStart: 0,
            timerTime: 0,
            name: ""
        };
        this.addTimestamp = this.addTimestamp.bind(this)
    }

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    addTimestamp() {
        const { timerTime, name } = this.state
        const body = {
            project: name,
            data: timerTime
        }

        axios.post('/api/timestamps', body).then(() => {
            this.props.getAllTimestamps()
        })
    }
    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log(this.state.name)
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="Stopwatch">
                <div className="Stopwatch-header">
                    <form>
                        <input
                            value={this.state.name}
                            onChange={e => this.handleName(e)}
                            type="text"
                            placeholder="Your Project Name Here!"
                            name="name"
                            required>
                        </input>
                    </form>
                </div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button onClick={this.stopTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.startTimer}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button onClick={this.resetTimer}>Reset</button>
                )}
                <div>
                    <button onClick={this.addTimestamp}>Add to Timestamp</button>
                </div>

            </div>
        );
    }
}

export default Stopwatch;