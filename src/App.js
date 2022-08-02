import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Home";
import AboutPage from "./containers/About";
import NotFound from "./containers/NotFound";
import Header from "./layouts/Header";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
        <Main />
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </nav>
    </div>
  );
}

export default App;
