import './App.css';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import Footer from "./components/Footer";
import Home from './routes/Home';

import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import FakeLink from './routes/FakeLink';



const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/*",
      element: <FakeLink />
    }
  ]
}
]);

function App() {
  
  return (
    <>
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
