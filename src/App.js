import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main/Main';
import Blog from './Components/Blog/Blog';
import Faq from './Components/Faq/Faq';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import LogIn from './Components/logIn/LogIn';
import Register from './Components/Register/Register';





function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>
        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
        {
          path: "/faq",
          element: <Faq></Faq>,
        },
        {
          path: "/logIn",
          element: <LogIn></LogIn>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ]
    }
  ])
  return (
   <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
