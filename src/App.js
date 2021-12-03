import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MoviesList from "./pages/MoviesList";
import MovieInfo from "./pages/MovieInfo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
