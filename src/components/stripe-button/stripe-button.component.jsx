import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // price in cents
    const publishableKey = 'pk_test_51I9BFQEAPPpgzpxqQPv5ZGZOJuKLKB01LGoPo66SOpxr3mEbzQypsYAup6K7c9L4Km9ciQO1ICWnJiXlzpIvJkFN00aotfsvRJ';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;