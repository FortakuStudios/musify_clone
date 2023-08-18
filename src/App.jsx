import "bootstrap/dist/css/bootstrap.min.css";

import ProfilePage from "./Pages/ProfilePage/KipaNitin_ProfilePage";
//import NewsPage from "./Pages/NewsPage/KipaNitin_NewsPage";
import "./custom-bootstrap.scss";
import Sidebar from "./Component/KipaNitin_Sidebar";
import "./custom.scss";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./Pages/NewsPage/KipaNitin_NewsPage";
//import { Row, Col } from "react-bootstrap/Container";

function App() {
  return (
    <>
      <Sidebar />
      <div className={`content-shift`}>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
