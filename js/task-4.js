const getTotalBalanceByGender = (users, gender) =>
    users
        .filter(user => user.gender === gender)
        .reduce((totalBalance, user) => totalBalance + user.balance, 0);
