import {
  FaCodepen,
  FaStore,
  FaUsers,
  FaUserFriends,
  FaUserNurse,
} from 'react-icons/fa';
import { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../component/layout/Spinner';
import RepoList from '../component/repos/RepoList';
import Githubcontext from '../context/github/Githubcontext';
import { getUserAndRepos } from '../context/github/GithubAction.js';

function User() {
  const { user, loading, repos, dispatch } = useContext(Githubcontext);

  const params = useParams();
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });
    };
    getUserData();
  }, [dispatch, params.login]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className=' mb-4'>
          <Link to='/' className=' btn btn-ghost rounded-sm'>
            back to home
          </Link>
        </div>
        <div className='flex xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className=' custom-card-image mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl card sm:image-full w-60 h-60 pr-6 pt-2 mb-0'>
              <figure>
                <img src={avatar_url} alt='profile' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className=' card-title mb-0'>{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>
          <div className=' cal-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {name}
                <div className='ml-2 mr-1 badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className=' mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className=' btn btn-outline'
                >
                  Visit Github profile
                </a>
              </div>
            </div>
            <div className='w-full rounded-lg shadow-md bg-base-100 status flex justify-between'>
              {location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'> {location}</div>
                </div>
              )}
              {blog && (
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://${blog}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className='stat'>
                  <div className='stat-title text-md'>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=' flex justify-between w-full fy-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
          <div className='stat'>
            <div className='stat-figure text-secondary text-red-500'>
              <FaUsers className=' text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Followers</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {followers}
            </div>
          </div>

          <div className='stat'>
            <div className='stat-figure text-secondary text-red-500'>
              <FaUserFriends className=' text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Following</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {following}
            </div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-secondary text-red-500'>
              <FaCodepen className=' text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Repos</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_repos}
            </div>
          </div>
          <div className='stat'>
            <div className='stat-figure text-secondary text-red-500'>
              <FaStore className=' text-3xl md:text-5xl' />
            </div>
            <div className='stat-title pr-5'>Public Gists</div>
            <div className='stat-value pr-5 text-3xl md:text-4xl'>
              {public_gists}
            </div>
          </div>
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
}

export default User;
