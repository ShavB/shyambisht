import "./App.css";
import About from "./pages/About/About";
import Projects from "./pages/Home/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
