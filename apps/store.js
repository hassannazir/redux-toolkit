const configureStore = require("@reduxjs/toolkit").configureStore;
//const { default: logger } = require("redux-logger");
const cakeReducer = require("./features/cake/cakeSlice");
const icecreamReducer = require("./features/icecream/icecreamSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
