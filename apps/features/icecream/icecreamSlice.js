const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     //this will also executes along with cake reducer when cakeOrdered dispatch
  //     ["cake/ordered"]: (state) => {
  //       state.numOfIcecreams--;
  //     },
  //   },
  //recommended way
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecreams--;
    });
    builder.addCase(cakeActions.restocked, (state, action) => {
      state.numOfIcecreams += action.payload;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
