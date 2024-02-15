// api.ts
import axios from 'axios';

interface ApiResponse {
  success: boolean;
  data: any; // Replace 'any' with a more specific type according to your API response structure
}

// Update the return type to Promise<ApiResponse> to reflect that it always returns a promise.
const postData = async (username: string, password: string): Promise<ApiResponse> => {
  // const url = 'https://saas.dynasoft.gr/loginauth';
  const url = 'http://localhost:3000/login';
  const bodyData = {
    username,
    password,
  };

  try {
    // Note the addition of withCredentials: true in the config object
    const response = await axios.post<ApiResponse>(url, bodyData, {
      withCredentials: true, // Ensures cookies are included with the request, important for sessions and authentication
    })
    console.log('Response:', response.data);
    console.log('HEaders',response.headers)
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


const verifySession = async (): Promise<ApiResponse> => {
  const url = 'http://localhost:3000/verifySession';

  try {
    const response = await axios.get<ApiResponse>(url, {
      withCredentials: true, // Ensures cookies are included with the request
    });
    console.log('Session verification response:', response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error during session verification:', error.message);
      return Promise.reject(error);
    } else {
      console.error('Unexpected error during session verification:', error);
      return Promise.reject(new Error('An unexpected error occurred during session verification'));
    }
  }
};

export  {postData,verifySession};
