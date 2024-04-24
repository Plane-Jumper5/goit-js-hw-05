const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
};


console.log(getUsersWithFriend(users, 'friendNamename'));


