import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import MovieDetails from "./pages/MovieDetails";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;