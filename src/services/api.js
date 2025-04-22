import axios from 'axios';

const API = axios.create({
  baseURL: 'https://bidders-portal.onrender.com/api',
  // baseURL: 'http://localhost:5000/api',
});

// Interceptor to add Authorization token if logged in
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Payment initiation API call (Flutterwave)
export const initiateFlutterwavePayment = async (paymentData) => {
  const response = await API.post('/payment/initiate', paymentData);
  return response;
};

// Get user details from backend
export const getUserDetails = async () => {
  const response = await API.get('/auth/user');
  return response.data;
};

// Attach token to requests
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = data => API.post('/auth/register', data);
export const loginUser = data => API.post('/auth/login', data);
export const fetchTenders = () => API.get('/tenders');
export const deleteTender = () => API.delete('/tenders');
export const createTender = data => API.post('/tenders', data);
export const fetchUsers = () => API.get('/admin/users');
export const updateUser = data => API.put('/admin/users', data);
export const updateUserRole = data => API.put('/admin/users/role', data);
export const fetchNotifications = () => API.get('/notifications');
export const initiateMpesaPayment = (payload) => API.post('/payment/mpesa', payload);

// Verify payment status using transaction reference
export const verifyPayment = async (transactionRef) => {
  const response = await API.get(`/payment/verify?tx_ref=${transactionRef}`);
  return response;
};
