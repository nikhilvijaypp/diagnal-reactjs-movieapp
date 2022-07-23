import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import movieApi from "../../apis/movieApi";
import movieApi from "../../services/api/apiBaseInstance";
import axios from "axios";

const initialState = {
  movieList: [],
  filteredMovieList: [],
  searchTerm: "",
  totalNumberOfMovies: 54,
};

let cancelToken;

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (pageNumber, thunkAPI) => {
    const { totalNumberOfMovies, movieList } = thunkAPI.getState().movies;
    // console.log('totalNumberOfMovies, movieList  :>> ', totalNumberOfMovies, movieList.length);

    if (movieList?.length <= totalNumberOfMovies) {
      if (typeof cancelToken != typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
      }
      cancelToken = axios.CancelToken.source();

      const response = await movieApi
        .get(`mocks/CONTENTLISTINGPAGE-PAGE${pageNumber}.json`, {
          cancelToken: cancelToken.token,
        })
        .catch((err) => console.log("Err :", err));

      const {
        page,
        page: {
          contentItems: { content },
        },
      } = response.data;

      return content;
    }
  }
);

const movieSlice = createSlice({
  name: "movies", //reducer name
  initialState,
  reducers: {
    filterMovies: (state, { payload }) => {
      if (payload) {
        state.filteredMovieList = state.movieList.filter((movie) =>
          movie.name.toLowerCase().includes(payload)
        );
      } else {
        state.filteredMovieList = [];
      }
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload.toLowerCase();
    },
    setTotalNumberOfMovies: (state, { payload }) => {
      state.totalNumberOfMovies = payload;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      // console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled");
      return { ...state, movieList: [...state.movieList, ...payload] };
    },
    [fetchAsyncMovies.rejected]: () => {
      // console.log("Rejected");
    },
  },
});

export const { filterMovies, setSearchTerm, setTotalNumberOfMovies } =
  movieSlice.actions;

export const getAllMovies = (state) => {
  const { movieList, filteredMovieList, searchTerm } = state.movies;

  if (searchTerm) {
    return filteredMovieList;
  }
  return movieList;
};

export const getsearchTerm = (state) => state.movies.searchTerm;

export default movieSlice.reducer;
