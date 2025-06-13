import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyArtworks from './components/Artworks';

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <MyArtworks/>
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
