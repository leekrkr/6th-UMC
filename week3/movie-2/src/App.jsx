import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage/Mainpage";
import Nowplayingpage from "./pages/Nowplayingpage/Nowplayingpage";
import Popularpage from "./pages/Popularpage/Popularpage";
import Topratedpage from "./pages/Topratedpage/Topratedpage";
import Upcoming from "./pages/Upcoming/Upcoming";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="rootWrap">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/nowplaying" element={<Nowplayingpage />} />
            <Route path="/popular" element={<Popularpage />} />
            <Route path="/toprated" element={<Topratedpage />} />
            <Route path="/upcoming" element={<Upcoming />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
