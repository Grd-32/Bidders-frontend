// Get logged-in user details from localStorage or API
export const getLoggedInUserDetails = async () => {
    try {
      // If the token exists, check localStorage first
      const token = localStorage.getItem('token');
      if (token) {
        const response = await fetch('http://localhost:5000/api/auth/user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          return response.json();
        }
      }
      return null; // Return null if no user is logged in or token is invalid
    } catch (error) {
      console.error('Failed to get user details:', error);
      return null;
    }
  };
  
  // Save token to localStorage after login or registration
  export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Logout user by clearing token from localStorage
  export const logoutUser = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };
  