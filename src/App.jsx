import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        toastStyle={{
          background: "#111827",
          color: "#fff",
          border: "1px solid rgba(59,130,246,.35)",
          borderRadius: "16px",
          boxShadow: "0 15px 40px rgba(0,0,0,.45)",
          fontSize: "15px",
          fontWeight: 500,
          padding: "12px 16px",
        }}
        progressStyle={{
          background: "#3b82f6",
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
