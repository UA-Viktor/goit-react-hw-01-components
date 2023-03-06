// import PropTypes from 'prop-types';

import { Container } from './App.styled';

import { Profile } from '../Profile/Profile';
import user from '../../user.json';

export const App = () => {
  return (
    <Container>
      <Profile 
          key={user.username}
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
      />
    </Container>
  );
};
