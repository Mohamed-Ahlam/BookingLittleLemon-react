import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  return (
    // The App component’s root element uses a div element. As this is not a semantic tag, replace it with a React fragment.
    //  a fragment starts with a <> tag and ends with a </> tag.
    <>
      <Nav/>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
