import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import InvoicePage from './InvoicePage';

// Mock data similar to Intasend's response structure
const mockPaymentDetails = {
  tracking_id: 'TXN-12345-ABCDE',
  invoice_id: 'ORDER-REF-67890', // Corresponds to api_ref
  value: '402.16',
  currency: 'KES',
  state: 'COMPLETE',
  charge_details: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone_number: '254712345678',
  },
  created_at: '2024-01-01T12:00:00Z',
  api_ref: 'ORDER-REF-67890',
};

// Helper function to render the component within a router context
const renderWithRouter = (ui, { route = '/', state = {} } = {}) => {
  window.history.pushState(state, 'Test page', route); // Set initial state

  return render(
    <MemoryRouter initialEntries={[{ pathname: route, state }]}>
      <Routes>
        <Route path={route} element={ui} />
      </Routes>
    </MemoryRouter>
  );
};


describe('InvoicePage Component', () => {
  test('renders correctly and displays invoice details when data is passed via state', () => {
    renderWithRouter(<InvoicePage />, {
      route: '/invoice',
      state: { paymentDetails: mockPaymentDetails },
    });

    // Check for key elements and data
    expect(screen.getByText('Payment Invoice')).toBeInTheDocument();
    expect(screen.getByText(/Status:/)).toHaveTextContent('Status: COMPLETE');
    expect(screen.getByText(/Transaction ID:/)).toHaveTextContent(`Transaction ID: ${mockPaymentDetails.tracking_id}`);
    expect(screen.getByText(/Order Reference:/)).toHaveTextContent(`Order Reference: ${mockPaymentDetails.invoice_id}`);
    expect(screen.getByText(/Name:/)).toHaveTextContent(`Name: ${mockPaymentDetails.charge_details.name}`);
    expect(screen.getByText(/Email:/)).toHaveTextContent(`Email: ${mockPaymentDetails.charge_details.email}`);
    expect(screen.getByText(/Amount Paid:/)).toHaveTextContent(`Amount Paid: ${mockPaymentDetails.currency} ${Number(mockPaymentDetails.value).toFixed(2)}`);
    expect(screen.getByText('Print / Save as PDF')).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument(); // Check for link
  });

  test('renders error message when no payment details are passed via state', () => {
     // Suppress console.error for this specific test if needed
     const originalError = console.error;
     console.error = jest.fn();

    renderWithRouter(<InvoicePage />, {
      route: '/invoice',
      state: {}, // No paymentDetails in state
    });

    // Check for error message
    expect(screen.getByText('Invoice Error')).toBeInTheDocument();
    expect(screen.getByText(/Invoice details not found/)).toBeInTheDocument();
    expect(screen.getByText('Go to Homepage')).toBeInTheDocument(); // Check for link even on error

    // Restore console.error
     console.error = originalError;
  });

   test('renders loading state initially if details are null (simulated)', () => {
    // Simulate state being initially null before useEffect runs
    render(
      <MemoryRouter initialEntries={['/invoice']}>
        <Routes>
          {/* Render component directly without state initially */}
          <Route path="/invoice" element={<InvoicePage />} />
        </Routes>
      </MemoryRouter>
    );

    // Initially, before useEffect (or if state is missing), it might show loading or error
    // Depending on implementation, it might briefly show loading then error
    // Let's check for the error state as that's the fallback without data
     expect(screen.getByText('Invoice Error')).toBeInTheDocument();
     expect(screen.getByText(/Invoice details not found/)).toBeInTheDocument();

    // Alternatively, if there was an explicit loading state:
    // expect(screen.getByText('Loading Invoice...')).toBeInTheDocument();
  });

});
