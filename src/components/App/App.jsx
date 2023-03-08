import { Main, Container } from './App.styled';

import { Profile } from '../Profile/Profile';
import user from '../../user.json';


export const App = () => {
  return (
    <>
      <Main>
        <Container>
          <Profile profile={user} />
        </Container>
      </Main>
    </>
  );
};