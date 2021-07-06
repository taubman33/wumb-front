import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



function AmPmButton(props) {

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