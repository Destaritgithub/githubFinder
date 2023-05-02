import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;
  return (
    <div
      className=' mb-2 rounded-md
   card bg-gray-800 hover:bg-gray-900'
    >
      <div className=' card-body'>
        <h3 className=' mb-2 text-xl font-semibold'>
          <a href={html_url}>
            <FaLink className=' inline mr-1' />
            {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div className=' flex
        '>
          <div className='mr-2 badge-info text-blue-400 badge-lg'>
            <FaEye className=' mr-2' />
            {watchers_count}
          </div>
          <div className='mr-2 badge-success text-blue-900 badge-lg'>
            <FaStar className=' mr-2' />
            {stargazers_count}
          </div>
          <div className='mr-2 badge-error text-red-700  badge-lg'>
            <FaInfo className=' mr-2' />
            {open_issues}
          </div>
          <div className='mr-2 badge-warning text-red-400 badge-lg'>
            <FaUtensils className=' mr-2' />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoItem;
