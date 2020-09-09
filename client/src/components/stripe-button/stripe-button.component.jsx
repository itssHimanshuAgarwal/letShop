import React from 'react';

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = 'pk_test_3rFYZJdPn5xLm7uvXECyIw9K00SX1mC1rC';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error:' + JSON.parse(error));
        alert(
          'There was an issue with your payment,Please make sure you use provided credit card'
        );
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='letShop Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`You Total is ₹${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
