import "./App.css";
import Header from "./components/navbar/Header.tsx";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";

function App() {
  return (
    //    <HomeScreen />
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
