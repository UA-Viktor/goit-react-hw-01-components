import { Card, List } from './Statistics.styled';

import { сheckData } from '../../util/сheckData';
import { StatisticsTitle } from '../StatisticsTitle/StatisticsTitle';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = ({ title, data }) => {
    const uniqueData = сheckData(data);
        return (
            <Card>
                {title && (
                    <StatisticsTitle text={title} />
                )}
                <List>
                    {Object.keys(uniqueData).map((key) => (
                            <StatisticsList
                                key={key}
                                name={key}
                                value={uniqueData[key]}
                            /> 
                    ))}
                </List>
            </Card>
        )
};