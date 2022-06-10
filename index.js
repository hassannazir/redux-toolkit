const store = require("./apps/store");
const cakeActions = require("./apps/features/cake/cakeSlice").cakeActions;

console.log("Initial State", store.getState());
const unsub = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(2));

unsub();
