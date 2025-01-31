import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        const createdAt = new Date().toISOString();
        return { payload: { fullName, nationalId, createdAt } };
      },

      reducer(state, action) {
        const { fullName, nationalId, createdAt } = action.payload;
        state.fullName = fullName;
        state.nationalId = nationalId;
        state.createdAt = createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
