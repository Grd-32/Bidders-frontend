import React, { useState, useEffect } from 'react'; // Removed useRef, not needed for Intasend.on
import { useParams, useNavigate } from 'react-router-dom'; // Added useNavigate
import { getLoggedInUserDetails } from '../services/auth'; // Function to get logged-in user details
// import { verifyPayment } from '../services/api'; // Placeholder for backend verification API call

const CheckoutPage = () => {
  const { tenderRef } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '', // Added firstName
    lastName: '', // Added lastName
    tender_ref: tenderRef || 'TenderPayment', // Default ref if not provided
    amount: 402.16, // Preset amount
    currency: 'KES', // Added currency
  });
  // const [loading, setLoading] = useState(false); // Might not be needed for Intasend button
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // Use this to show success message briefly before redirect

  // Placeholder for Intasend publishable key - replace with actual key
  const INTASEND_PUBLISHABLE_KEY = "ISPubKey_test_xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx";

  // Intasend Event Handlers
  const handleComplete = (results) => {
    console.log("Payment successful:", results);
    setSuccess(true);
    setError(null);

    // TODO: Send results to backend for verification
    // try {
    //   await verifyPayment({
    //     signature: results.signature, // Or other relevant data like transaction ID
    //     tracking_id: results.tracking_id,
    //     invoice_id: results.invoice_id,
    //     // ... other necessary data
    //   });
    //   console.log("Backend verification successful.");
    //   // Redirect only after successful backend verification
    //   navigate('/invoice', { state: { paymentDetails: results } }); // Redirect to invoice page
    // } catch (backendError) {
    //   console.error("Backend verification failed:", backendError);
    //   setError("Payment confirmation failed. Please contact support.");
    //   setSuccess(false);
    // }

    // For now, redirect immediately after frontend success
     navigate('/invoice', { state: { paymentDetails: results } }); // Pass results data to invoice page
  };

  const handleFailed = (results) => {
    console.error("Payment failed:", results);
    setError(results.error || "Payment failed. Please try again."); // Use error message from Intasend if available
    setSuccess(false);
  };


  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getLoggedInUserDetails(); // Assuming getLoggedInUserDetails returns { email, firstName, lastName }
      if (user) {
        setFormData((prev) => ({
          ...prev,
          email: user.email || '',
          firstName: user.firstName || '', // Populate from user details
          lastName: user.lastName || '', // Populate from user details
        }));
      }
    };
    fetchUserDetails();

    fetchUserDetails();

    // --- Intasend SDK Loading and Event Listener Setup ---
    let script = document.querySelector('script[src="https://unpkg.com/intasend-inlinejs-sdk@3.0.4/build/intasend-inline.js"]');
    let scriptAdded = false;

    if (!script) {
      script = document.createElement('script');
      script.src = 'https://unpkg.com/intasend-inlinejs-sdk@3.0.4/build/intasend-inline.js';
      script.async = true;
      document.body.appendChild(script);
      scriptAdded = true; // Mark that we added the script in this effect run
    }

    const attachListeners = () => {
      if (window.Intasend) {
          console.log("Attaching Intasend listeners...");
          window.Intasend.on("COMPLETE", handleComplete);
          window.Intasend.on("FAILED", handleFailed);
      } else {
        // If Intasend is not ready yet, wait a bit and try again
        // This is a basic retry mechanism; more robust solutions might use script.onload
        console.log("Intasend SDK not ready, retrying listener attachment...");
        setTimeout(attachListeners, 500);
      }
    };

    // Attach listeners once the script is loaded
    if (script.hasAttribute('data-loaded')) { // Check if script was already loaded and marked
        attachListeners();
    } else {
        script.onload = () => {
            console.log("Intasend SDK script loaded.");
            script.setAttribute('data-loaded', 'true'); // Mark script as loaded
            attachListeners();
        };
        // Handle potential script loading errors
        script.onerror = () => {
            console.error("Failed to load Intasend SDK script.");
            setError("Payment gateway could not be loaded. Please refresh the page or contact support.");
        };
    }


    // --- Cleanup ---
    return () => {
      console.log("Cleaning up Intasend listeners...");
      if (window.Intasend) {
        window.Intasend.off("COMPLETE", handleComplete);
        window.Intasend.off("FAILED", handleFailed);
      }
      // Only remove the script if this specific effect instance added it
      // This prevents issues if multiple components try to load the same script
      if (scriptAdded && script.parentNode) {
        console.log("Removing Intasend SDK script...");
        script.parentNode.removeChild(script);
        // Optional: Clean up the global Intasend object if safe
        // delete window.Intasend;
      } else if (script) {
         // If the script existed before, remove the onload handler to prevent memory leaks
         script.onload = null;
         script.onerror = null;
      }
    };

  }, [navigate]); // Add navigate to dependency array as it's used in handleComplete

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // handlePayment function is no longer needed for form submission

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Checkout</h2>
      {/* Form to collect user details */}
      <form>
         {/* First Name Input */}
         <div style={{ marginBottom: '10px' }}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="John"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
         {/* Last Name Input */}
         <div style={{ marginBottom: '10px' }}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Doe"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        {/* Email Input */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@example.com"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        {/* Phone Number Input */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="phone">Phone Number (e.g., 2547...)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="254700123456"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        {/* Tender Reference Input - Now used as api_ref */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="tender_ref">Order Reference</label>
          <input
            type="text"
            id="tender_ref"
            name="tender_ref"
            value={formData.tender_ref}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        {/* Amount Input */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="amount">Amount ({formData.currency})</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
            disabled
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        {/* Intasend Button */}
        <intasend-button
           data-publishable_key={INTASEND_PUBLISHABLE_KEY}
           data-amount={formData.amount}
           data-currency={formData.currency}
           data-email={formData.email}
           data-first_name={formData.firstName}
           data-last_name={formData.lastName}
           data-phone_number={formData.phone}
           data-api_ref={formData.tender_ref} // Using tender_ref as api_ref
           data-country="KE" // Assuming Kenya
           // Add optional redirect URL and method if needed
           // data-redirect_url="https://yoursite.com/payment-complete"
           // data-method="POST" // Default is GET
        >
          <button
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#1976d2', // Or Intasend brand color
              color: '#fff',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
            }}
          >
             Pay Securely with Intasend
          </button>
        </intasend-button>

      </form>
      {/* User feedback messages */}
      {error && <p style={{ color: 'red', marginTop: '15px' }}>Error: {error}</p>}
      {success && <p style={{ color: 'green', marginTop: '15px' }}>Payment Successful! Redirecting...</p>}
    </div>
  );
};

export default CheckoutPage;
