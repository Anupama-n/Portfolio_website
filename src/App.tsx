import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationContactSections from './components/myContact';


function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
    <EducationContactSections/>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
