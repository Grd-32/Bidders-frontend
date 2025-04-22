import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { verifyPayment } from '../services/api'; // Import the verifyPayment function

const PaymentConfirmationPage = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true); // Start loading true
  const [error, setError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null); // e.g., 'pending', 'successful', 'failed'
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Retrieve checkout data from sessionStorage (can happen concurrently or before verification)
    const storedData = sessionStorage.getItem('checkoutData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setOrderDetails(parsedData);
        console.log('Retrieved order details from session:', parsedData);
      } catch (parseError) {
        console.error("Error parsing checkout data from sessionStorage:", parseError);
        // Set an error state related to session data retrieval failure if needed
        // setError("Failed to retrieve order details from session.");
      }
    } else {
      console.warn("No checkout data found in sessionStorage.");
    }

    // --- Payment Verification Logic ---
    const queryParams = new URLSearchParams(location.search);
    const tx_ref = queryParams.get('tx_ref'); // Get tx_ref from URL

    if (tx_ref) {
      // Define the async function to check status
      const checkPaymentStatus = async () => {
        setLoading(true); // Ensure loading is true
        setError(null); // Reset error state

        try {
          console.log(`Verifying payment with tx_ref: ${tx_ref}`);
          const response = await verifyPayment(tx_ref); // Call the API function
          console.log('Payment verification API response:', response);

          // Assuming backend responds with { data: { status: 'successful' / 'failed' / etc. } }
          if (response && response.data && response.data.status) {
            const status = response.data.status;
            setPaymentStatus(status); // Update payment status state
            console.log(`Payment status set to: ${status}`);

            // Optional: Update order details if backend provides more info
            // if (response.data.orderDetails) {
            //   setOrderDetails(prev => ({ ...prev, ...response.data.orderDetails }));
            // }

            if (status === 'failed') {
                // Optionally set a specific error message from backend if available
                setError(response.data.message || 'Payment verification reported failure.');
            }
          } else {
             throw new Error('Invalid response structure from verification API.');
          }

        } catch (err) {
          console.error("Error verifying payment:", err);
          // Set error state based on caught error
          setError(err.response?.data?.message || err.message || 'An error occurred during payment verification.');
          setPaymentStatus('failed'); // Set status to failed on error
        } finally {
          setLoading(false); // Stop loading indicator regardless of success or failure
        }
      };

      // Call the verification function
      checkPaymentStatus();

    } else {
      // Handle case where tx_ref is missing in the URL
      console.error("No transaction reference (tx_ref) found in URL query parameters.");
      setError("Payment transaction reference not found. Cannot verify status.");
      setPaymentStatus('failed'); // Mark as failed if tx_ref is missing
      setLoading(false); // Stop loading as we cannot proceed
    }
  }, [location.search]); // Dependency array includes location.search to re-run on param changes

  // --- Download Invoice Function ---
  const handleDownloadInvoice = () => {
    if (!orderDetails) {
      console.error("Cannot download invoice: Order details not available.");
      alert("Order details are not available to download."); // Inform user
      return;
    }

    // Assume tx_ref is available from URL params (already extracted in useEffect)
    const queryParams = new URLSearchParams(location.search);
    const tx_ref = queryParams.get('tx_ref') || 'N/A'; // Use N/A if somehow missing

    // Format the invoice data
    const invoiceContent = `
Payment Invoice
----------------------------------
Status: ${paymentStatus}
Transaction Reference: ${tx_ref}
----------------------------------
Order Details:
Email: ${orderDetails.email}
Phone: ${orderDetails.phone}
Tender Reference: ${orderDetails.tender_ref}
Amount: KES ${orderDetails.amount}
----------------------------------
Thank you for your payment.
    `;

    // Create Blob and download link
    try {
      const blob = new Blob([invoiceContent.trim()], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `invoice-${orderDetails.tender_ref || tx_ref}.txt`; // Filename
      document.body.appendChild(a); // Append anchor to body
      a.click(); // Trigger download
      document.body.removeChild(a); // Remove anchor from body
      URL.revokeObjectURL(url); // Clean up the object URL
      console.log("Invoice download initiated.");
    } catch (error) {
        console.error("Error generating invoice download:", error);
        alert("Failed to generate invoice for download.");
    }
  };


  // --- JSX Rendering Logic ---
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px', background: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px' }}>Payment Confirmation</h2>

      {/* Loading State */}
      {loading && <p style={{ textAlign: 'center' }}>Verifying payment, please wait...</p>}

      {/* Error State */}
      {!loading && error && (
        <div style={{ color: 'red', marginBottom: '15px', padding: '10px', border: '1px dashed red', borderRadius: '4px' }}>
          <p><strong>Error:</strong> {error}</p>
        </div>
      )}

      {/* --- Successful Payment Section --- */}
      {!loading && !error && paymentStatus === 'successful' && orderDetails && (
        <div style={{ background: '#e6ffed', border: '1px solid #b7ebc9', borderRadius: '4px', padding: '15px', marginBottom: '20px' }}>
          <h3 style={{ color: '#2f855a', marginTop: '0' }}>Payment Successful!</h3>
          <div style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '10px' }}>
            <h4>Invoice Details:</h4>
            <p><strong>Email:</strong> {orderDetails.email}</p>
            <p><strong>Phone:</strong> {orderDetails.phone}</p>
            <p><strong>Tender Reference:</strong> {orderDetails.tender_ref}</p>
            <p><strong>Amount Paid:</strong> KES {orderDetails.amount}</p>
            <p><strong>Transaction Reference:</strong> {new URLSearchParams(location.search).get('tx_ref') || 'N/A'}</p>
            {/* Add other details if available from backend response later */}
          </div>
          <button
            onClick={handleDownloadInvoice}
            style={{
              marginTop: '15px',
              padding: '10px 15px',
              backgroundColor: '#3182ce',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
             }}
          >
            Download Invoice (.txt)
          </button>
        </div>
      )}

      {/* --- Failed Payment Section --- */}
      {!loading && !error && paymentStatus === 'failed' && (
        <div style={{ background: '#fff5f5', border: '1px solid #fbb6ce', borderRadius: '4px', padding: '15px', marginBottom: '20px' }}>
          <h3 style={{ color: '#c53030', marginTop: '0' }}>Payment Failed</h3>
          <p>Unfortunately, your payment could not be processed.</p>
          <p>Reason: {error || 'Please check the details or try again.'}</p>
          {/* Optionally add a link to retry or contact support */}
        </div>
      )}

      {/* --- Other Payment Statuses Section (e.g., pending) --- */}
      {!loading && !error && paymentStatus && paymentStatus !== 'successful' && paymentStatus !== 'failed' && (
        <div style={{ background: '#fffbeb', border: '1px solid #fbd38d', borderRadius: '4px', padding: '15px', marginBottom: '20px' }}>
           <h3 style={{ color: '#d69e2e', marginTop: '0' }}>Payment Status: {paymentStatus}</h3>
           <p>Your payment status is currently '{paymentStatus}'. Please wait or check back later.</p>
        </div>
      )}


      {/* Display Original Order Details Separately (Optional, could be removed if shown in success section) */}
      {/* Keeping this for context, but might be redundant if payment is successful */}
      {/* {orderDetails && (
        <div>
          <h3>Order Details:</h3>
          <p>Email: {orderDetails.email}</p>
          <p>Phone: {orderDetails.phone}</p>
          <p>Tender Reference: {orderDetails.tender_ref}</p>
          <p>Amount: KES {orderDetails.amount}</p>
        </div>
      )} */}

      {/* Message if order details couldn't be loaded from session, shown only if not loading AND payment wasn't successful */}
      {!loading && !orderDetails && paymentStatus !== 'successful' && (
         <p style={{ fontStyle: 'italic', color: '#718096', marginTop: '15px' }}>Could not retrieve original order details from session.</p>
       )}
    </div>
  );
};

export default PaymentConfirmationPage;
