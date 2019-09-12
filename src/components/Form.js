import React, {Component} from 'react';
import Countdown from 'react-countdown-now';
import Dropdown from 'react-dropdown';


    
class Form extends Component {
    constructor() {
        super();
        this.state = {
            month: '',
        }
    }

    setMonth = ({value}) => {
        this.setState({
            month: value
        })
    }

    render() {

        const options = [
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
          ]


        const renderer = ({ days, hours, minutes, seconds, completed }) => {
            if (completed) {
              return <div> race day! </div>;
            } else {
              return <span>{days} days {hours}:{minutes}:{seconds}</span>;
            }
          };

        return (
            <div>
                <form>
                    <Dropdown options={options} onChange={this.setMonth} value={options[0]} placeholder="Select a month" />

                    <Countdown
                        date={new Date(2019, 10, 3, 9, 0, 0, 0)}
                        renderer={renderer}
                    />,
                </form>
            </div>
        )
    }
}

export default Form;