import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./index";

const App = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <main>
        <Routes>
          <Route path="/movie/:id" element={<MovieInformation />}></Route>
          <Route path="/actors/:id" element={<Actors />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </main>

      <CssBaseline />
    </div>
  );
};

export default App;
