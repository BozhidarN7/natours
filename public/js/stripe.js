/* eslint-disable */

import axios from "axios";
import { showAlert } from "./alerts";


const stripe = Stripe('pk_test_51IC14qFywi3g6FnXdR1Qa7M0ZuGngcK27BsboEE1Sfhe4iM59h6cv4KXrqWzMv6XeASUMnqG0QOAEaskc2a7MAKI00DXdR9w02');

export const bookTour = async tourId => {
    try {

        // 1. Get checkout session from API
        const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
        //console.log(session);
        // 2. Create checkout form + charge the credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (err) {
        console.log(err);
        showAlert('error', err);
    }


}