import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function HourButton(props) {


        const handleHourButton = () => {
            console.log('working')
            setOption(options.value)
        }
    
        const options = [
            { value: '1', label: '1', onclick:{handleHourButton} },
            { value: '2', label: '2', onclick:{handleHourButton} },
            { value: '3', label: '3', onclick:{handleHourButton} },
            { value: '4', label: '4', onclick:{handleHourButton} },
            { value: '5', label: '5', onclick:{handleHourButton} },
            { value: '6', label: '6', onclick:{handleHourButton} },
            { value: '7', label: '7', onclick:{handleHourButton} },
            { value: '8', label: '8', onclick:{handleHourButton} },
            { value: '9', label: '9', onclick:{handleHourButton} },
            { value: '10', label: '10', onclick:{handleHourButton} },
            { value: '11', label: '11', onclick:{handleHourButton} },
            { value: '12', label: '12', onclick:{handleHourButton} }
          ]
    
        const [option, setOption] = useState(options[0])
    
     
        return (
            <div>
    
    <Dropdown className="AmPmDropdown"
              options={options} 
              value={option} 
              placeholder="Hour" />
            </div>


    );
}

export default HourButton;