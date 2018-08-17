export const selectedUser = (user) => {
  console.log('You clicked', user.name);
  return{
    type: "USER_CLICKED",
    payLoad: user
  }
};
