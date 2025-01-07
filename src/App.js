import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/MainHeader';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import NotificationList from './components/NotificationList';
import RegisterPage from './pages/RegisterPage';
import CheckoutPage from './pages/CheckoutPage';
import AdminDashboard from './components/admin/AdminDashboard';
import Tenders from './components/admin/Tenders';
import Transactions from './components/admin/Transactions';
import Notifications from './components/admin/Notifications';
import Chart from './components/admin/Chart';
import LandingPage from './pages/LandingPage';
import TenderInformation from './pages/TenderInformation';
import TenderNotifications from './pages/TenderNotification';
import SupplierPreQualification from './pages/SupplierPreQualification';
import BiddingAssistance from './pages/BiddingAssistance';
import BecomeAMember from './pages/BecomeMember';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';
import ContactPage from './pages/Contact';
import Payment from './pages/Payment';
import Terms from './pages/Terms';
import Privacy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/tender-information" element={<HomePage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/tender-notification" element={<TenderNotifications />} />
        <Route path="/supplier-prequalification" element={<SupplierPreQualification />} />
        <Route path="/tender-information" element={<TenderInformation />} />
        <Route path="/bidding-assistance" element={<BiddingAssistance />} />
        <Route path="/become-a-member" element={<BecomeAMember />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin/tenders" element={<Tenders />} />
        <Route path="/admin/transactions" element={<Transactions />} />
         {/* Admin Dashboard */}
         <Route path="/admin" element={<AdminDashboard />}>
          <Route path="tenders" element={<Tenders />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="charts" element={<Chart />} />
         
        </Route>
        <Route path="/notifications" element={<NotificationList />} />
        <Route path="/checkout/:tenderRef" element={<CheckoutPage />} />
        {/* Add more routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
