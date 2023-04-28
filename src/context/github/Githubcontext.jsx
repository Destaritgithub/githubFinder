import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
const Githubcontext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  // Get search users (testing purpose)
  const searchUsers = async (text) => {
    setLoading();
    const prams = new URLSearchParams({
      q: text,
    });
    const response = await fetch(`${GITHUB_URL}/search/users?${prams}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };
  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });
  const setLoading = () => dispatch({ type: 'SET_LOADING' });
  return (
    <Githubcontext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </Githubcontext.Provider>
  );
};
export default Githubcontext;
