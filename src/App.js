import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Topics from './Components/Topics';
import Statistics from './Components/Statistics';
import Blog from './Components/Blog'
import ErrorPage from './Components/ErrorPage';
import Quizes from './Components/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Topics />
        },
        {
          path:'/topics', element:<Topics />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path:'/statistics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics />
        },
        {
          path:'/blog', element:<Blog />
        },
        {
          path:'/quiz/:id',
          loader:({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element:<Quizes />
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
