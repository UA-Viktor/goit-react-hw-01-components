import PropTypes from 'prop-types';
import { Title } from './StatisticsTitle.styled';

export const StatisticsTitle = ({ text }) => {
    return <Title>{text}</Title>;
}

StatisticsTitle.prototype = {
    text: PropTypes.string.isRequired,
}