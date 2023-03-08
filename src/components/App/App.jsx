import { Main, Container } from './App.styled';

import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';

import user from '../../user.json';
import data from '../../data.json';

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
      </Main>
    </>
  );
};