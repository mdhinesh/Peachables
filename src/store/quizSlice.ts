import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"; 
import axios from "axios";

const initialState = {
  quizList: [],
  loading: false,
  error: null,
};

// const dispatch = useDispatch()

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuizListStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchQuizListSuccess(state, action) {
      state.quizList = action.payload;
      state.loading = false;
    },
    fetchQuizListFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchQuizListStart, fetchQuizListSuccess, fetchQuizListFailure } =
  quizSlice.actions;

export const fetchQuizList = () => async (dispatch: (arg0: { payload: any; type: "quiz/fetchQuizListStart" | "quiz/fetchQuizListSuccess" | "quiz/fetchQuizListFailure"; }) => void) => {
  try {
    dispatch(fetchQuizListStart());
    const response = await axios.get("http://localhost:3000/quizlist");
    dispatch(fetchQuizListSuccess(response.data));
  } catch (error: any) {
    dispatch(fetchQuizListFailure(error.message));
  }
};

export default quizSlice.reducer;
