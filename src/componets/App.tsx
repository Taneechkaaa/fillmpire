import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/movie/:id" element={<h1>Movie Information</h1>}></Route>
          <Route path="/actors/:id" element={<h1>Actors</h1>}></Route>
          <Route path="/movies" element={<h1>Movies</h1>}></Route>
          <Route path="/profile/:id" element={<h1>Profile</h1>}></Route>
        </Routes>
      </main>

      <CssBaseline />
    </div>
  );
};

export default App;
