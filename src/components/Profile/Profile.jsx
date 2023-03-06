// import PropTypes from 'prop-types';

import { Card } from './Profile.styled';

import { UserInfo } from '../UserInfo/UserInfo';
import { UserStats } from '../UserStats/UserStats';

export const Profile = ({username, tag, location, avatar, followers, views, likes}) => { 
    return (
        <Card>
            <UserInfo 
                key={username}
                username={username}
                tag={tag}
                location={location}
                avatar={avatar}
            />
            
            <UserStats 
                key={tag}
                followers={followers}
                views={views}
                likes={likes}
            />
        </Card>
    );
};

// Profile.PropTypes = {
//     username:   PropTypes.string.isRequired,
//     tag:        PropTypes.string.isRequired,
//     location:   PropTypes.string.isRequired,
//     avatar:     PropTypes.string.isRequired,
//     followers:  PropTypes.number.isRequired,
//     views:      PropTypes.number.isRequired,
//     likes:      PropTypes.number.isRequired,
// };