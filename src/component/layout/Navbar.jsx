import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Navbar({ title }) {
  return (
    <nav className=' navbar mb-12 shadow-lg bg-neutral text-neutral-content bg-slate-900'>
      <div className=' container mx-auto flex justify-between'>
        <div className=' flex px-2 mx-2'>
          <FaGithub className=' inline pr-2 text-3xl text-white' />
          <Link to='' className=' text-lg font-bold align-middle text-white'>
            {title}
          </Link>
        </div>
        <div className=' px-0 mx-0 '>
          <div className='flex justify-between'>
            <Link
              to='/'
              className=' px-8 btn btn-ghost btn-sm rounded-btn text-white'
            >
              Home
            </Link>
            <Link
              to='/about'
              className=' flex-1 btn btn-ghost btn-sm rounded-btn text-white'
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};
// Navbar.PropTypes = {
//   title: PropTypes.string,
// };

export default Navbar;
