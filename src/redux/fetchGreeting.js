import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGreeting = createAsyncThunk("greeting", async () => {
  const response = await fetch("http://localhost:3000/random_greeting");
  const data = await response.json();
  return data.greeting;
});
