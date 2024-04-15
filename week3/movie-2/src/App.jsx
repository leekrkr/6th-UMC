import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Nowplayingpage from "./pages/Nowplayingpage";
import Popularpage from "./pages/Popularpage";
import Topratedpage from "./pages/Topratedpage";
import Upcoming from "./pages/Upcoming";
import NavBar from "./components/NavBar";

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
        </BrowserRouter>
    </div>
  );
}

export default App;
