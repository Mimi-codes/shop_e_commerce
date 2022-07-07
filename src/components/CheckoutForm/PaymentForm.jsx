import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import { commerce } from '../../lib/commerce';

const stripePromise = loadStripe(process.env.REACT_STRIPE_PUBLIC_KEY);



const PaymentForm = ({ checkoutToken, backStep, shippingData, onCaptureCheckout, nextStep, timeout}) => {
  const handleSubmit = async (event, elements, stripe) => {
event.preventDefault();

if(!stripe || !elements) return;

const cardElement = elements.getElement(CardElement);

const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

if(error) {
  console.log(error);
} else {
  const orderData =  {
    line_items: checkoutToken.live.line_items,
    customer: { 
      firstname: shippingData.firstName, 
      lastname: shippingData.lastName,
    email: shippingData.email
    },
    shipping: {
      name: 'Primary', 
      street: shippingData.address1, 
    town_city: shippingData.city,
  county_state: shippingData.shippingSubdivision,
  postal_zip_code: shippingData.zip,
  country: shippingData.shippingCountry,
  },
  fulfillment: {
    shipping_method: shippingData.shippingOption
  },
  payment: {
    gateway: 'stripe',
    stripe: {
      payment_method_id: paymentMethod.id
    }
  }
  }

onCaptureCheckout(checkoutToken.id, orderData);

timeout()

nextStep();
}
     
  // const live = commerce.checkout.getLive(checkoutToken);
  // console.log(totalAmount.subtotal.formatted_with_symbol, 'mimi');
 
  // console.log(checkOutToken, 'baba oyo');
  // commerce.checkout.getLive('gway_QlW0RpxRGXEqwn')
  return (
    <>
    <Review checkoutToken={checkoutToken} />
    <Divider />
    <Typography variant='h6' gutterBottom styles={{margin: '20px 0'}}>Payment method</Typography>
    <Elements stripe={stripePromise}>
      <ElementsConsumer>
        {({ elements, stripe }) => (
<form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
  <CardElement />
  <br /> <br />
  <div style={{display: 'flex', justifyContent: 'space-between'}}>
    <Button variant='outlined' onClick={backStep}>Back</Button>
    <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
                {/* Pay {live.checkoutToken.subtotal.formatted_with_symbol} */}
              </Button>
  </div>
</form>
        )}
      </ElementsConsumer>
    </Elements>
    </>
  )
}
}
export default PaymentForm; //rendered in Checkout.jsx