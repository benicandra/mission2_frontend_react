{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}
{
  /* Silahkan Input Data Register Secara Lengkap Terlebih Dahulu lalu klik "Daftar" Untuk Mencoba Fitur CRUD */
}

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import NoFooterLayout from "./layouts/NoFooterLayout";

import Register from "./pages/Register";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NoFooterLayout>
              <Register />
            </NoFooterLayout>
          }
        />
        <Route
          path="/profil"
          element={
            <MainLayout>
              <Profile />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
