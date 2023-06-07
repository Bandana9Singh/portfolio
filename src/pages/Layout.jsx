import '../App.css';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default Home;