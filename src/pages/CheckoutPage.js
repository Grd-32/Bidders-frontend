import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { initiateFlutterwavePayment } from '../services/api'; // Backend API function
import { getLoggedInUserDetails } from '../services/auth'; // Function to get logged-in user details

const CheckoutPage = () => {
  const { tenderRef } = useParams(); // Get tender reference from URL
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    tender_ref: tenderRef || '',
    amount: 402.16, // Preset amount
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Automatically populate email if the user is logged in
  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getLoggedInUserDetails();
      if (user) {
        setFormData((prev) => ({ ...prev, email: user.email }));
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data } = await initiateFlutterwavePayment(formData);
      // Store form data in sessionStorage before redirecting
      sessionStorage.setItem('checkoutData', JSON.stringify(formData));
      // Redirect to Flutterwave payment link
      window.location.href = data.paymentLink;
      setSuccess(true);
    } catch (err) {
      setError('Failed to initiate payment. Please try again.');
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>Checkout</h2>
      <form onSubmit={handlePayment}>
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
          <label htmlFor="phone">Phone Number</label>
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
        {/* Tender Reference Input */}
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="tender_ref">Tender Reference</label>
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
          <label htmlFor="amount">Amount (KES)</label>
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
        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#1976d2',
            color: '#fff',
            fontSize: '16px',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Link to='/payment'>
          {loading ? 'Processing...' : 'Pay Now'}
          </Link>
          
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Redirecting to payment...</p>}
    </div>
  );
};

export default CheckoutPage;
