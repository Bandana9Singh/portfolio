import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBook, faLeaf, faBus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
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
        <Link to="program"><button class="curved-box">Programming <FontAwesomeIcon icon={faCode}/></button></Link>
        <Link to="book-review"><button class="curved-box">Book Review <FontAwesomeIcon icon={faBook}/></button></Link>
        <Link to="garden"><button class="curved-box">Gardening <FontAwesomeIcon icon={faLeaf}/></button></Link>
        <Link to="travel"><button class="curved-box">Travel <FontAwesomeIcon icon={faBus}/></button></Link>
      </section>
    </>
  );
}

export default Home;