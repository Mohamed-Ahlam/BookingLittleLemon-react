import './App.css';
// ADD META TAGS
import Hero from './components/Hero';
import Nav from './components/Nav';
import Specials from './components/Specials';
import Footer from './components/Footer';



function App() {
  return (
    // The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.
    //  a fragment starts with a <> tag and ends with a </> tag.
    <>
      <Nav/>
      <Hero/>
      <Specials/>
      {/* <Footer/> */}
    </>
  );
}

export default App;
