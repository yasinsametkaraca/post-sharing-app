import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import {useSelector} from "react-redux";

const App = () => {
  const [token] = useToken();
  const {modal} = useSelector(state => state.modal)

  return (
      <>
          <BrowserRouter>
              {token?.token && <Navbar/>}
              {modal && <Modal></Modal>}
              <Routes>
                  <Route path="/" element={!token?.token ? <Link to={"/auth"}/> : <HomePage/>} />
                  <Route path="/auth" element={<AuthPage />} />
              </Routes>
          </BrowserRouter>
          <ToastContainer></ToastContainer>
      </>
  );
}

export default App;
