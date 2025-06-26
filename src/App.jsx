import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/heder/nav.jsx";
import Footer from "./components/footer/footer";
("./components/footer/footer.jsx");
import "./App.css";
import Semaforo from "./components/semaforo/semafaro.jsx";
import Card from "./components/card/index.jsx";
import Contador from "./components/contador/index.jsx";
import Sobre from "./components/sobre/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<h1>Homeaaa</h1>} />
        <Route path="/Card" element={<Card/>} />
        <Route path="/contador" element={<Contador/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/semafaro" element={<Semaforo/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
