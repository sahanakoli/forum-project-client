import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const CheckoutForm = () => {

    const stripe = useStripe();
    const axiosSecure = useAxiosSecure();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [error, setError] = useState('');
    const amount = 15;
    

    useEffect(() =>{
        axiosSecure.post('/create-payment-intent', {amount})
        .then(res =>{
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
        })
    },[axiosSecure])


    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);
        if(card == null){
            return
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log('payment error', error);
            setError(error.message);
        }
        else{
            console.log('payment method', paymentMethod)
            setError('')
        }
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'Payment successfully',
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div>
           {/* <h2 className=" text-xl font-medium mt-10">Payment Amount: $15</h2> */}
            <div className="w-1/2 mt-8">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-blue-300 mt-6" type="submit" disabled={!stripe || !clientSecret} >
                    Pay
                </button>
                <p className=" text-red-600">{error}</p>
                {/* {transactionId && <p className=" text-green-600">Your Transaction Id: {transactionId} </p>} */}
            </form>
            </div>
        </div>
    );
};

export default CheckoutForm;