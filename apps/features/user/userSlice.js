const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsync = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const fetchUsers = createAsync("user/fetchUsers", async () => {
  const users = await axios.get("http://jsonplaceholder.typicode.com/users");
  return users.data.map((user) => user.id);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
