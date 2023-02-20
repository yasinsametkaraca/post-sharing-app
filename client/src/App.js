import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/auth" element={<AuthPage />} />
              </Routes>
          </BrowserRouter>
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
