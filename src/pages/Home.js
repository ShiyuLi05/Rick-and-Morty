import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [characters, setCharacters] = useState([]);
  const [isSortedByName, setSortedByName] = useState(true);
  //const [isAlive, setAlive] = useState(true);

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

  
  const isAlive = (status) => {
    if(status === 'Alive') {
      return true;
    } else return false;
  }


  return (
    <>
    <div className="RaMHero"></div>
    <div className='container result'>
      <div className='flex'>
        <h2>Characters</h2>
        <div className='buttons'>
        {isSortedByName ? <button onClick={sortByName} className='sort'>Sort by Name</button> : <button onClick={sortById} className='sort'>Sort by ID</button>}
        <button className='add'><Link to= '/add'>New Character</Link></button>
        </div>
      </div>
      <section className='characters result-container'>
      {characters.map(character => (
            <div key={character.id} onClick={() => navigate(`character/${character.id}`)} className='card'>
                <figure>
                    <img src={character.image} alt={character.name} className='RaM-img' />
                </figure>
                <div>              
                <h3 className='RaM-name'>{character.name}</h3>
                <p className='RaM-gender'>
                  <span className='gender'>Gender: </span>
                  <span>{character.gender}</span>
                </p>
                <ul>
                  <li>
                    <span className={isAlive(character.status) ? 'alive life' : 'life' }></span>
                    {character.status} - {character.species}
                  </li>
                </ul>
                </div>
            </div>
        ))}
      </section>
    </div>
    </>
  )
}

export default Home