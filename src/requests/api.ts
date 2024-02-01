// api.ts
import axios from 'axios';

interface ApiResponse {
  success: boolean;
  data: any; // Replace 'any' with a more specific type according to your API response structure
}

// Update the return type to Promise<ApiResponse> to reflect that it always returns a promise.
const postData = async (username: string, password: string): Promise<ApiResponse> => {
  const url = 'https://saas.dynasoft.gr/loginauth';
  const bodyData = {
    username,
    password,
  };

  try {
    const response = await axios.post<ApiResponse>(url, bodyData);
    console.log('Response:', response.data);
    return response.data; // Return the response data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      // Rethrow the error as a rejected promise
      return Promise.reject(error);
    } else {
      console.error('Unexpected error:', error);
      // Rethrow or handle as a rejected promise
      return Promise.reject(new Error('An unexpected error occurred'));
    }
  }
};

export default postData;
