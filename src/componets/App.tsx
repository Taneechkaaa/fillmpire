import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import useStyles from "./styles";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./index";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
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
