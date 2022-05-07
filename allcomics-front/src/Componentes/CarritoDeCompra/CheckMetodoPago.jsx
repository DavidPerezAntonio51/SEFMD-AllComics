import { useContext, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import PaymentContext from "../../Contextos/PaymentContext";


function CheckMetodoPago() {
    const paymentContext = useContext(PaymentContext);
    const [radioValue, setRadioValue] = useState(paymentContext.PaymentType);
  
    const radios = [
      { name: 'Tarjeta Crédito o Débito', value: '1' },
      { name: 'Transferencia o Deposito', value: '2' },
    ];

    const changePaymentMethod = (e) => {
      setRadioValue(e.target.value);
      paymentContext.setPaymentType(e.target.value);
    }

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
              onChange={changePaymentMethod}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </>
    );
  }
  
  export default CheckMetodoPago;