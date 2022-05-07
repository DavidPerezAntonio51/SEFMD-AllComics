import { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";


function CheckMetodoPago() {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Tarjeta Crédito o Débito', value: '1' },
      { name: 'Transferencia o Deposito', value: '2' },
    ];
  
    return (
      <>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? 'outline-success' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  
  export default CheckMetodoPago;