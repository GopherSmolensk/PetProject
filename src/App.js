import "./App.css";
import { Header } from "./Components/Header.jsx";
import { Main } from "./Components/Main.jsx";
import { Footer } from "./Components/Footer.jsx";
import { Navigation } from "./Components/Navigation.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";



import { Cinema } from "./Content/Cinema/Cinema";
import { Quiz } from "./Content/Quiz/Quiz";




function App() {
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
          <Header />
          <Main />
          <Routes>
            <Route path='/Main/*' element={<Main />} />
            <Route path='/Cinema/*' element={<Cinema />} />
            <Route path='/Quiz/*' element={<Quiz />} />
          </Routes>
          <Navigation />
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
