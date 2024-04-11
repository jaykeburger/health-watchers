import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.js";
import Jake from "./pages/our-group/jake.js";
import Joseph from "./pages/our-group/joseph.js";
import Sara from "./pages/our-group/Sara.js";
import Denise from "./pages/our-group/denise.js";
import Home from "./pages/landingpage.js";
import Leaderboard from "./pages/leaderboard.js";
import Settings from "./pages/settings.js";
import Profile from "./pages/profile.js";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />}/>
          <Route path="leaderboard" element={<leaderboard />}/>
          <Route path="denise" element={<Denise />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
