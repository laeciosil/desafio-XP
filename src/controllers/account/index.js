import accountService from '../../services/account/index.js';

const deposit = (request, response) => {
  const { account } = request.user;
  const { value } = request.body;
  accountService.deposit(account, value);

  response.status(200).json({ message: 'Deposito realizado com sucesso' });
};

const withdraw = async (request, response) => {
  const { account } = request.user;
  const { value } = request.body;
  await accountService.withdraw(account, value);

  response.status(200).json({ message: 'Saque realizado com sucesso' });
};

export default { deposit, withdraw };
