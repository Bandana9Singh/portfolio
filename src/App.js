import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Programming from './pages/Programming';
import BookReview from './pages/BookReview';
import Garden from './pages/Garden';
import Travel from './pages/Travel';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="program" element={<Programming />} />
          <Route path="book-review" element={<BookReview />} />
          <Route path="garden" element={<Garden />} />
          <Route path="travel" element={<Travel />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
