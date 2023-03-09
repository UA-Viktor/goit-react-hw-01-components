import { Main, Container } from './App.styled';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';

import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';


export const App = () => {
  return (
    <>
      <Main>
        <Container>
          <Profile profile={user} />
        </Container>
        <Container>
          <Statistics title="Upload stats" data={data} />
        </Container>
        <Container>
          <FriendList friends={friends} />
        </Container>
      </Main>
    </>
  );
};