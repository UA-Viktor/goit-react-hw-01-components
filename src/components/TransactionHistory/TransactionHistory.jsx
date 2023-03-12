import PropTypes from 'prop-types';

import { Card, Table, Th, Tr } from './TransactionHistory.styled';

import { TransactionLine } from '../TransactionLine/TransactionLine';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Card>
      <Table>
        <thead>
          <Tr>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Currency</Th>
          </Tr>
        </thead>

        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TransactionLine
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
