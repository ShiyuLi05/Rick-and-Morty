import './style/index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Character from './pages/Character';

function HomePage() {
    return (
        <>
        <Header />
        <main>
        <div className='page'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/home' element={<Home />} />
              <Route exact path='/character/:character' element={<Character />} />
              <Route exact path='*' element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </main>
        <Footer />
        </>
    );
}

export default HomePage;