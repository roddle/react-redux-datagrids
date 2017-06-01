export const selectUser = (user) => {
  console.log("you clicked user ", user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};