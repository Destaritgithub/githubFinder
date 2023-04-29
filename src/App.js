import {
  BrowserRouter as Router,
  Route,
  // RouterProviderProps,
  Routes,
} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Footer from './component/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/Githubcontext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './component/layout/Alert';
import User from './pages/User';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className=' flex flex-col justify-between h-screen bg-slate-400'>
            <Navbar />
            <main className=' container mx-auto px-3 pb-12'>
              <Alert />
              <Routes>
                <Route exactS path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/user/:login' element={<User />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
