import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';
const Githubcontext = createContext();
export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  return (
    <Githubcontext.Provider
      value={{
        // users: state.users,
        // loading: state.loading,
        // user: state.user,
        // repos: state.repos,
        ...state,
        dispatch,
      }}
    >
      {children}
    </Githubcontext.Provider>
  );
};
export default Githubcontext;
