import React from 'react';
import { useState, useContext } from 'react';
import Githubcontext from '../../context/github/Githubcontext';
import AlertContext from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubAction.js';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, dispatch } = useContext(Githubcontext);
  const { setAlert } = useContext(AlertContext);
  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      //todo -search user
      dispatch({ type: 'SET_LOADING' });
      const users = await searchUsers(text);
      dispatch({ type: 'GET_USERS', payload: users });
      setText('');
    }
  };

  return (
    <div className=' grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 m:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className=' form-control'>
            <div className=' relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg bg-black text-white font-bold'>
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button
            className=' text-lg'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
          >
            clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
