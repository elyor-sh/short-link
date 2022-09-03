import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import AuthPage from "./pages/auth";
import {LoginPage} from "./pages/auth/login";
import {RegisterPage} from "./pages/auth/register";
import PrivateRoutes from "./routes/private-routes";
import {LinksPage} from "./pages/links";
import {LinkCreatePage} from "./pages/links/create";
import {Layout} from "./components/layout";

function App() {
  return (
    <Routes>

      <Route element={<AuthPage />}>
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />
      </Route>
        <Route element={<Layout />}>
            <Route element={<PrivateRoutes />}>
                <Route path='links' element={<LinksPage />} />
                <Route path='links/create' element={<LinkCreatePage />} />
            </Route>
        </Route>
      <Route path="*" element={<Navigate to={'/links'} />} />
    </Routes>
  );
}

export default App;
