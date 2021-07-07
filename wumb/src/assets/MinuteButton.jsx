import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function MinuteButton(props) {


        const handleMinuteButton = () => {
            console.log('working')
            setOption(options.value)
        }
    
        const options = [
            { value: '00', label: '00', onclick:{handleMinuteButton} },
            { value: '15', label: '15', onclick:{handleMinuteButton} },
            { value: '30', label: '30', onclick:{handleMinuteButton} },
            { value: '45', label: '45', onclick:{handleMinuteButton} }
          ]
    
        const [option, setOption] = useState(options[0])
    
     
        return (
            <div>
    
    <Dropdown className="MinuteDropdown"
              options={options} 
              value={option} 
              placeholder="Minutes" />
            </div>


    );
}

export default MinuteButton