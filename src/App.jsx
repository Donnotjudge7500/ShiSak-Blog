import { useEffect, useState } from 'react'
import { Footer, Header } from './components/Index';
import { Outlet } from 'react-router-dom';
import appwriteAuthentication from './appwrite/authentication.js';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/features/authenticationSlice';
import { getAllThePost } from './store/features/postSlice.js';
import configurationService from './appwrite/configuration.js';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();


  // Fetching the posts.
  useEffect(() => {
    configurationService.getAllPost([]).then((posts) => {
      if (posts) {
        dispatch(getAllThePost({ posts }));
      }
    })
  }, [])


  // Checking for the authenticated user.
  useEffect(() => {
    appwriteAuthentication.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(login({ userData }))

      } else {
        dispatch(logout())
      }
    }).finally(() => setLoading(false));
  },[])


  // Conditional rendering.
  return !loading ? (
    (
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
  ) : <h1>Loading...</h1> 
}

export default App
