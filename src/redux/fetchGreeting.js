import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await fetch('http://localhost:3000/random_greeting');
  const data = await response.json();
  return data.greeting;
});

export default fetchGreeting;
