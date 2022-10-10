import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Topics from './Components/Topics';
import Statistics from './Components/Statistics';
import Blog from './Blog';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Layout></Layout>,
      children:[
        {
          path:'/', element:<Topics />
        },
        {
          path:'/topics', element:<Topics />,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path:'/statistics', element:<Statistics />
        },
        {
          path:'/blog', element:<Blog />
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
