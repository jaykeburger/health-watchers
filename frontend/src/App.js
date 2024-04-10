import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import Jake from "./pages/our-group/jake.js";
import Joseph from "./pages/our-group/joseph.js";
import Sara from "./pages/our-group/Sara.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jake" element={<Jake />} />
          <Route path="joseph" element={<Joseph />}/>
          <Route path="sara" element={<Sara />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
