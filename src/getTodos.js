import axios from 'axios';

export async function getTodos() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
    );
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}