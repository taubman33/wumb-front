import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function HourButton(props) {


        const handleHourButton = () => {
            console.log('working')
            setOption(options.value)
        }
    
        const options = [
            { value: '01', label: '1', onclick:{handleHourButton} },
            { value: '02', label: '2', onclick:{handleHourButton} },
            { value: '03', label: '3', onclick:{handleHourButton} },
            { value: '04', label: '4', onclick:{handleHourButton} },
            { value: '05', label: '5', onclick:{handleHourButton} },
            { value: '06', label: '6', onclick:{handleHourButton} },
            { value: '07', label: '7', onclick:{handleHourButton} },
            { value: '08', label: '8', onclick:{handleHourButton} },
            { value: '09', label: '9', onclick:{handleHourButton} },
            { value: '10', label: '10', onclick:{handleHourButton} },
            { value: '11', label: '11', onclick:{handleHourButton} },
            { value: '12', label: '12', onclick:{handleHourButton} }
          ]
    
        const [option, setOption] = useState(options[0])
        console.log(option.value)
     
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