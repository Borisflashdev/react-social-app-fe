import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5005/api/v1" }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (data): any => {
        url: "/signup";
        method: "POST";
        body: data;
      },
    }),
  }),
});

export const { useSignupMutation } = apiSlice;
