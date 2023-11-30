import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";



const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
const Membership = () => {
    return (
        <div>
            <Helmet>
                <title>Forum | Membership</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Membership;