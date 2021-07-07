import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


//this is going to allow us to switch between AM and PM when we seacrch by time.
//there are probably a few other ways to do this, but for now, like our hard coded table
//we are just going to get it working and eventually clean this up

//I actually wanted to work a bit with different plug ins on this project (YT Embed, Calendar, 
//and in this case, the drop down. So this/these may not be the best ways to do everything
//but the goal was to learn  a few new things while building this up.)

function AmPmButton() {

    const handleAmPmButton = () => {
        console.log('working')
        setOption(options.value)
    }

    const options = [
        { value: 'AM', label: 'AM', onclick:{handleAmPmButton} },
        { value: 'PM', label: 'PM', onclick:{handleAmPmButton} }
      ]

    const [option, setOption] = useState(options[0])

 
    return (
        <div>

<Dropdown className="AmPmDropdown"
          options={options} 
          value={option} 
          placeholder="AM/PM" />
        </div>
    );
}

export default AmPmButton;