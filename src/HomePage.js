import './style/index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Character from './pages/Character';
import AddForm from './pages/AddForm';

function HomePage() {
    return (
        <>
        <Header />
        <main>
        <div className='page'>
            <Routes>
              <Route exact path='/rick-and-morty' element={<Home />} />
              <Route exact path='/' element={<Home />} />
              <Route exact path='/rick-and-morty/character/:character' element={<Character />} />
              <Route exact path='/add' element={<AddForm />} />
              <Route exact path='*' element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </main>
        <Footer />
        </>
    );
}

export default HomePage;