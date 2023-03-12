import PropTypes from 'prop-types';

import { Line, Col } from './TransactionLine.styled';

export const TransactionLine = ({ type, amount, currency }) => {
  return (
    <Line>
      <Col>{type}</Col>
      <Col>{amount}</Col>
      <Col>{currency}</Col>
    </Line>
  );
};

TransactionLine.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
