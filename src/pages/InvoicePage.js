import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const InvoicePage = () => {
  const location = useLocation();
  const [invoiceDetails, setInvoiceDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Retrieve payment details passed via navigation state
    if (location.state?.paymentDetails) {
      console.log("Received payment details:", location.state.paymentDetails);
      setInvoiceDetails(location.state.paymentDetails);
    } else {
      // TODO: Implement fetching details from backend if state is missing
      // For now, just show an error if state is missing
      console.error("Invoice details not found in location state.");
      setError("Invoice details not found. Please go back or contact support.");
      // Example: Fetch from backend using an ID from URL params if needed
      // const { invoiceId } = useParams();
      // fetchInvoiceDetails(invoiceId);
    }
  }, [location.state]);

  const handlePrint = () => {
    window.print(); // Use browser's print functionality
  };

  if (error) {
    return (
      <div style={styles.container}>
        <h2>Invoice Error</h2>
        <p style={styles.errorText}>{error}</p>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }

  if (!invoiceDetails) {
    // Optional: Show a loading state while fetching or if details are missing initially
    return (
      <div style={styles.container}>
        <h2>Loading Invoice...</h2>
        <p>If loading persists, please check your connection or contact support.</p>
      </div>
    );
  }

  // Extract relevant details safely
  const {
    tracking_id, // Intasend's unique payment tracking ID
    invoice_id, // Your unique invoice reference (passed as api_ref)
    value, // Amount paid
    currency,
    state, // Status (e.g., COMPLETE)
    charge_details, // Contains customer info if available
    created_at,
    api_ref // Your original reference (same as invoice_id here)
  } = invoiceDetails;

  const customerName = charge_details?.name || 'N/A';
  const customerEmail = charge_details?.email || 'N/A';
  const paymentDate = created_at ? new Date(created_at).toLocaleString() : 'N/A';

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Payment Invoice</h2>

      <div style={styles.detailsSection}>
        <p><strong>Status:</strong> <span style={styles.statusComplete}>{state}</span></p>
        <p><strong>Transaction ID:</strong> {tracking_id || 'N/A'}</p>
        <p><strong>Order Reference:</strong> {invoice_id || api_ref || 'N/A'}</p>
        <p><strong>Date:</strong> {paymentDate}</p>
      </div>

      <div style={styles.detailsSection}>
        <h3 style={styles.subHeader}>Billing Details</h3>
        <p><strong>Name:</strong> {customerName}</p>
        <p><strong>Email:</strong> {customerEmail}</p>
        {/* Add Phone Number if available in charge_details */}
        {/* <p><strong>Phone:</strong> {charge_details?.phone_number || 'N/A'}</p> */}
      </div>

      <div style={styles.detailsSection}>
        <h3 style={styles.subHeader}>Payment Details</h3>
        <p><strong>Amount Paid:</strong> {value ? `${currency} ${Number(value).toFixed(2)}` : 'N/A'}</p>
        <p><strong>Service/Item:</strong> Tender Access Fee (Example)</p> {/* Replace with actual item if known */}
      </div>

      <div style={styles.buttonContainer}>
        <button onClick={handlePrint} style={styles.printButton}>
          Print / Save as PDF
        </button>
        <Link to="/" style={styles.homeLink}>Go to Homepage</Link>
      </div>
    </div>
  );
};

// Basic Styling
const styles = {
  container: {
    padding: '30px',
    maxWidth: '800px',
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #eee',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  subHeader: {
    color: '#555',
    borderBottom: '1px dotted #ccc',
    paddingBottom: '5px',
    marginBottom: '15px',
  },
  detailsSection: {
    marginBottom: '25px',
    lineHeight: '1.6',
  },
  statusComplete: {
    color: 'green',
    fontWeight: 'bold',
  },
   errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
  buttonContainer: {
    textAlign: 'center',
    marginTop: '30px',
    paddingTop: '20px',
    borderTop: '1px solid #eee',
  },
  printButton: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    marginRight: '10px',
  },
  homeLink: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#007bff',
    textDecoration: 'none',
    border: '1px solid #007bff',
    borderRadius: '4px',
  }
};

export default InvoicePage;
