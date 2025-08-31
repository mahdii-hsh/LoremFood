import { createSlice } from "@reduxjs/toolkit";
import foods from "@/data/foods.json";

interface STComment {
  id: number;
  likeCnt: number;
  disLikeCnt: number;
}
const initialState: STComment[] = foods.foods.map((item) => ({
  id: item.id,
  likeCnt: 1,
  disLikeCnt: 1,
}));


const commentSlice = createSlice({
  initialState: initialState,
  name: "comment",
  reducers: {
    like: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload.id);
      state[index].likeCnt++;
    },
    disLike: (state, action) => {
      const index = state.findIndex((item) => item.id == action.payload.id);
      state[index].disLikeCnt++;
    },
  },
});


export const { like, disLike } = commentSlice.actions;
export default commentSlice.reducer;
