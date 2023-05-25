import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import Button from '../components/Button';

function Home() {

  const [characters, setCharacters] = useState([]);
  const [isSortedByName, setSortedByName] = useState(true);

  const navigate = useNavigate(); 
  
  const page1 = `https://rickandmortyapi.com/api/character`;
  const page2 = `https://rickandmortyapi.com/api/character?page=2`;
 
  useEffect(() => {
    const getCharacters = async () => {
        try { 
            const data1 = await axios.get(page1);
            const data2 = await axios.get(page2);
            const list = data1.data.results.concat(data2.data.results).splice(0, 24);
            setCharacters(list);
        } catch(error) {
            setCharacters('');
            console.log(error);
        }
    };

    getCharacters();
  }, []);

  const sortByName = () => {
    const sortCharacters = [...characters]; 
      sortCharacters.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    setCharacters(sortCharacters);
    setSortedByName(false);
  };

  const sortById = () => {
    const sortCharacters = [...characters];
      sortCharacters.sort((a, b) => {
        return a.id - b.id;
      });
    setCharacters(sortCharacters);
    setSortedByName(true);
  }


  return (
    <div className='container'>
      <button>New character</button>
      <section className='characters'>
        {isSortedByName ? <button onClick={sortByName}>Sort by Name</button> : <button onClick={sortById}>Sort by ID</button>}
      {characters.map(character => (
            <div key={character.id} onClick={() => navigate(`character/${character.name}`)}>
                <h2>{character.name}</h2>
                <p>{character.id}</p>
                <figure>
                    <img src={character.image} alt={character.name} />
                </figure>
            </div>
        ))}
      </section>
    </div>
  )
}

export default Home