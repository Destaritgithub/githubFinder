import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className=' hero'>
      <div className=' text-center hero-content'>
        <div className=' max-w-lg'>
          <h1 className='text-8xl font-bold mb-8'> Oops!</h1>
          <p className=' text-5xl mb-8'> 404 - Page not found!</p>
          <Link
            to='/'
            className=' flex items-center font-bold ml-24  bg-blue-400 rounded-lg h-10 w-25 text-white '
          >
            <FaHome className='' />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
