let Expenses = [];

function getAll(userId, categories, from, to) {
  return Expenses.filter((expense) => {
    if (userId && userId !== expense.userId) {
      return false;
    }

    if (
      categories &&
      categories.length > 0 &&
      !categories.includes(expense.categories)
    ) {
      return false;
    }

    const expenseDate = new Date(expense.spentAt);

    if (from && new Date(from) > expenseDate) {
      return false;
    }

    if (to && new Date(to) < expenseDate) {
      return false;
    }

    return true;
  });
}

function getById(id) {
  return Expenses.filter((expense) => expense.id === id);
}

function create(userId, spentAt, title, amount, category, note) {
  const newExpense = {
    id: Date.now(),
    userId: userId,
    spentAt: spentAt,
    title: title,
    amount: amount,
    category: category,
    note: note || '',
  };

  Expenses.push(newExpense);

  return newExpense;
}

function remove(id) {
  Expenses = Expenses.filter((expense) => expense.id !== id);
}

function update(id, updates) {
  const expense = getById(id);

  Object.assign(expense, updates);
}

const expensesService = {
  getAll,
  getById,
  create,
  remove,
  update,
};

module.exports = {
  expensesService,
};
