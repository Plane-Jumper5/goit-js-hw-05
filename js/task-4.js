const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender) // Фільтруємо користувачів за статтю
    .reduce((totalBalance, user) => totalBalance + user.balance, 0); // Знаходимо загальний баланс за допомогою reduce()
};

console.log(getTotalBalanceByGender(users, 'male')); // Поверне загальний баланс чоловіків (100 + 300 = 400)


