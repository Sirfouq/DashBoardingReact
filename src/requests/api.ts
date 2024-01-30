import axios from 'axios';

interface ApiResponse {
  // Define the structure of your expected response here
  // For example:
  success: boolean;
  data: any;
}

const postData = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  // const requestBody = {
  //   cmd: 'mob_table_data',
  //   tbl: 'Companies',
  //   username: 'kokkinos1@gmail.com',
  //   password: 'Abcd1234*@'
  // };

  const bodyData ={
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

  try {
    const response = await axios.post<ApiResponse>(url, bodyData);
    console.log('Response:', response.data);
    // Handle your response here
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};

export default postData;
