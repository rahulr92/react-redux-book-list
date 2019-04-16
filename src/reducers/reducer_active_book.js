// State relevant to this reducer
export default function(state = null, action) {
  // console.log("Recieved action " + action.type);
  switch (action.type) {
    case "BOOK_SELECTED":
      return action.payload;
  }
  return state;
}
