import { createContext, useState } from "react";

const PaymentContext = createContext();

function PaymentProvier({children}) {
    const [ShowPaymentMetod, setShowPaymentMetod] = useState(false);
    const [PaymentType, setPaymentType] = useState('1');

    const switchShowPaymentMetod = ()=>{
        setShowPaymentMetod(!ShowPaymentMetod);
    }
    const data = {
        ShowPaymentMetod, 
        switchShowPaymentMetod, 
        PaymentType, 
        setPaymentType
        }
    return ( 
        <PaymentContext.Provider value={data}>{children}</PaymentContext.Provider>
    );
}


export {PaymentProvier};
export default PaymentContext;