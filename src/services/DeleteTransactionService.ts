import { getCustomRepository } from 'typeorm';

import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transactionExisting = await transactionsRepository.findOne(id);

    if (!transactionExisting) {
      throw new AppError('Transaction does not exist.');
    }

    await transactionsRepository.remove(transactionExisting);
  }
}

export default DeleteTransactionService;
