import "./App.css";
import Header from "./components/navbar/Header.tsx";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/homeScreen.tsx";
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";
import Footer from "./components/navbar/Footer.tsx";
import PrivacyPolicy from "./pages/privacyPolicy.tsx";

function App() {
  return (
    //    <HomeScreen />
    <div className="min-h-dvh relative flex flex-col text-amber-50 bg-indigo-400">
      <Header />

      <main className="flex-1 mx-60 bg-gray-600 p-[2em] z-1 border-t border-b border-black">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
