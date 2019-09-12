import React, {Component} from 'react';
import Countdown from 'react-countdown-now';
import Dropdown from 'react-dropdown';
import './Form.scss'


    
class Form extends Component {
    constructor() {
        super();
        this.state = {
            month: '',
            day: '',
            date: '',
            time: 0
        }
    }

    setMonth = ({value}) => {
        this.setState({
            month: value
        })
    }

    startCountdown = (e) => {
        e.preventDefault()
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
          ]
        const date = new Date (2019, months.indexOf(this.state.month), this.state.day, this.state.time.slice(0,2), this.state.time.slice(3,5))
        this.setState({
            date
        })
        
    }

    render() {

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
          ]


        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <div> race day! </div>;
            } else {
              return <span> COUNTDOWN:  {days} days {hours} hours {minutes} mins {seconds} seconds</span>;
            }
          };

        return (
            <div>
                <form onSubmit={this.startCountdown}>
                    <Dropdown options={months} onChange={this.setMonth} value={this.state.month} placeholder="month" />
                    <input type="number" min="1" max="31" placeholder='day' onChange={(e) => this.setState({day: e.target.value})} value={this.state.day}/>
                    <input type="time" onChange={(e) => this.setState({time: e.target.value})} value={this.state.time}/>
                    <button> start countdown </button>
                </form>
                <Countdown
                    date={this.state.date}
                    renderer={renderer}
                />,
            </div>
        )
    }
}

export default Form;