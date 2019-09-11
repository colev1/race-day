import React, {component} from 'react';
    
class Countdown extends component {
    constructor() {
        super();
        this.state = {
            race_date: ''
        }
    }
    
    render() {
        return (
            <div>
                <form>
                    <input placeholder='date'/>
                </form>
            </div>
        )
    }
}