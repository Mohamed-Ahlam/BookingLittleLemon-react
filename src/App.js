import './App.css';
// ADD META TAGS
import Hero from './components/Hero';
import Nav from './components/Nav';
import Specials from './components/Specials';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';



function App() {
  return (
    // The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.
    //  a fragment starts with a <> tag and ends with a </> tag.
    <>
      <Nav/>
      <Hero/>
      <Specials/>
      <Testimonial/>
      <Footer/>
    </>
  );
}

export default App;
