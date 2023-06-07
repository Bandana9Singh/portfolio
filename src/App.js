import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBook, faLeaf, faBus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <section class="section-row">
        <div class="curved-box verticle-center">
          <h1>Hi, I am Bandana</h1>
          <p>
            I am a coder and I intend to use this platform to pour down my thoughts on programming, books, gardening and travel.
            Basically whatever, my mood dictates.
          </p>
        </div>
      </section>
      <section class="section-row header-links">
        <button class="curved-box">Programming <FontAwesomeIcon icon={faCode}/></button>
        <button class="curved-box">Books Reviews <FontAwesomeIcon icon={faBook} /></button>
        <button class="curved-box">Gardening <FontAwesomeIcon icon={faLeaf} /></button>
        <button class="curved-box">Travels <FontAwesomeIcon icon={faBus} /></button>
      </section>
    </div>
  );
}

export default App;
