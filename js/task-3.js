const sortByDescendingFriendCount = (users) => {
  const sortedUsers = users.toSorted((a, b) => b.friends.length - a.friends.length);
  console.log(sortedUsers); // Виводимо відсортований масив користувачів
  return sortedUsers;
};


