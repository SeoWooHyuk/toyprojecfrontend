import { BrowserRouter } from 'react-router-dom';
import Header from "./Components/app/Header"
import Main from "./Components/app/Main"
import Footer from "./Components/app/Footer"
import AuthProvider from "./Components/context/AuthProvider"
import HttpHeadersProvider from "./Components/context/HttpHeadersProvider";
import "./css/style.css"

function App() {

  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <HttpHeadersProvider>
            <Header />
            <Main />
            <Footer />
          </HttpHeadersProvider>
        </AuthProvider>
   
      </BrowserRouter>
    </div>
  );
}

export default App;
