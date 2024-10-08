// api.ts
import axios from "axios";

interface ApiResponse {
  logged_in: boolean;
  data: any;
}

interface UserApiResponse {
  users: any;
}

interface StoreAPiResponse {
  products: any;
}

// Update the return type to Promise<ApiResponse> to reflect that it always returns a promise.
const postData = async (
  username: string,
  password: string
): Promise<ApiResponse> => {
  // const url = 'https://saas.dynasoft.gr/loginauth';
  const url = "http://localhost:3000/login";
  const bodyData = {
    username,
    password,
  };

  try {
    // Note the addition of withCredentials: true in the config object
    const response = await axios.post<ApiResponse>(url, bodyData, {
      withCredentials: true, // Ensures cookies are included with the request, important for sessions and authentication
    });
    console.log("Response:", response.data);
    console.log("HEaders", response.headers);
    return response.data; // Return the response data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      // Rethrow the error as a rejected promise
      return Promise.reject(error);
    } else {
      console.error("Unexpected error:", error);
      // Rethrow or handle as a rejected promise
      return Promise.reject(new Error("An unexpected error occurred"));
    }
  }
};

const verifySession = async (): Promise<ApiResponse> => {
  const url = "http://localhost:3000/verifySession";
  // const url = 'https://saas.dynasoft.gr/cooktest';

  try {
    const response = await axios.get<ApiResponse>(url, {
      withCredentials: true, // Ensures cookies are included with the request
    });
    console.log("Session verification response:", response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error during session verification:", error.message);
      return Promise.reject(error);
    } else {
      console.error("Unexpected error during session verification:", error);
      return Promise.reject(
        new Error("An unexpected error occurred during session verification")
      );
    }
  }
};

const get_companies = async (): Promise<UserApiResponse> => {
  const url = "https://dummyjson.com/users";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: UserApiResponse = await response.json();
  return data;
};

// const url = 'https://saas.dynasoft.gr/erp_companies_all';
// try {
//   const response = await axios.get<ApiResponse>(url, {
//     withCredentials: true, // Keep or remove based on API requirements
//   });
//   console.log('Data fetched successfully');
//   return response.data;
// } catch (error) {
//   console.error('Error fetching data', error);
//   throw error; // Allows calling code to handle the error further
// }

const StoreRequest = async (): Promise<StoreAPiResponse> => {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: StoreAPiResponse = await response.json();
  return data;
  // try {
  //   const response = await axios.get<ApiResponse>(url, {
  //     withCredentials: true, // Keep or remove based on API requirements
  //   });
  //   console.log("Data fetched successfully");
  //   return response.data;
  // } catch (error) {
  //   console.error("Error fetching data", error);
  //   throw error; // Allows calling code to handle the error further
  // }
};

export { postData, verifySession, get_companies, StoreRequest };
