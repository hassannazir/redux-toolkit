const store = require("./apps/store");
const cakeActions = require("./apps/features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./apps/features/icecream/icecreamSlice").icecreamActions;
const fetchUsers = require("./apps/features/user/userSlice").fetchUsers;

console.log("Initial State", store.getState());
const unsub = store.subscribe(() =>
  console.log("Updated State", store.getState())
);

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(2));
// store.dispatch(cakeActions.ordered());

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

//unsub();
