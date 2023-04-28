import { useContext } from 'react';
import Spinner from '../layout/Spinner';
import UsersItem from './UsersItem';
import Githubcontext from '../../context/github/Githubcontext';

function UserResults() {
  const { users, loading } = useContext(Githubcontext);

  if (!loading) {
    return (
      <div className='grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <h1>
            <UsersItem key={user.id} user={user} />
          </h1>
        ))}
      </div>
    );
  } else {
    return (
      <h3>
        <Spinner />
      </h3>
    );
  }
}

export default UserResults;
