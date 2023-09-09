import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Pages/main";
import Navbar from "../Components/Navbar/navbar";
export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}