function sortByDescendingFriendCount(users) {
    return users.sort((a, b) => b.friends.length - a.friends.length);
}


