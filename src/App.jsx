import './App.css';

import Header from './components/Header';
import MobileMenu from './components/MobilMenu';
import Root from './routes/root';
import ErrorPage from './routes/ErrorPage';
import Footer from "./components/Footer";

import { createPortal } from 'react-dom';
import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";



const router = createBrowserRouter([
{
  path: "/",
  element: <Root />,
  errorElement: <ErrorPage />
}
]);

function App() {
  
  return (
    <>
      <Header />
      {createPortal(
        <MobileMenu />, document.getElementById("mobileMenu")
      )}
      <RouterProvider router={router}/>
      <Footer />
    </>
  )
}

export default App
