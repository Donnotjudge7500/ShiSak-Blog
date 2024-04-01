import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store/store.js';

import { Home, AllPost, AddPost, Post, EditPage, Login, SignUp } from './Pages/IndexPages.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthenticationLayout } from './components/Index.js';

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: (
        <AuthenticationLayout authentication={ false }>
          <Login />
        </AuthenticationLayout>
      )
    },
    {
      path: "/signup",
      element: (
        <AuthenticationLayout authentication={ false }>
          <SignUp />
        </AuthenticationLayout>
      )
    },
    {
      path: "/all-posts",
      element: (
        <AuthenticationLayout authentication>
          <AllPost />
        </AuthenticationLayout>
      )
    },
    {
      path: "/add-post",
      element: (
        <AuthenticationLayout authentication>
          <AddPost />
        </AuthenticationLayout>
      )
    },
    {
      path: "/edit-post/:slug",
      element: (
        <AuthenticationLayout authentication>
          <EditPage />
        </AuthenticationLayout>
      )
    },
    {
      path: "/post/:slug",
      element: (
        <Post />
      )
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
      <RouterProvider router={ router } />
  </Provider>
)
