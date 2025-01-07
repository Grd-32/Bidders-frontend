import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const Payment = () => {
  const config = {
    public_key: "FLWPUBK_TEST-adb6b22882b6fd14923e7c674039c99e-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "customer@example.com",
      phonenumber: "08012345678",
      name: "Customer Name",
    },
    customizations: {
      title: "Bidders Portal",
      description: "Payment for items in cart",
      logo: "images/logo.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
      console.log("Payment response:", response);
      closePaymentModal(); // Close the payment modal when done
    },
    onClose: () => {
      console.log("Payment modal closed");
    },
  };
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  return (
    <div>
      <h1>Flutterwave Payment</h1>
      <FlutterWaveButton {...fwConfig} />
    </div>
  );
};

export default Payment;
