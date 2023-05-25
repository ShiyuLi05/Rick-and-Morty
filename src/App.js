import './style/index.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NotFound from './pages/NotFound';

function App() {
    return (
      <Routes>
        <Route exact path='/404' element={<NotFound />}>
        </Route>
        <Route exact path='*' element={<HomePage />} />
      </Routes> 
    );
}

export default App;