import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Character() {
  const { character } = useParams();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [gender, setGender] = useState('');
  const [origin, setOrigin] = useState('');
  const [specie, setSpecie] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [created, setCreated] = useState('');
  
  // const navigate = useNavigate();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);
        setName(data.name);
        setAvatar(data.image);
        setGender(data.gender);
        setOrigin(data.origin.name);
        setSpecie(data.species);
        setStatus(data.status);
        setCreated(data.created);
        setLocation(data.location.name);
      } catch (error) {
        console.log(error);
      };
    };
    
    getData();
  }, []);
  
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${name}`}</title>
      </Helmet>
      <div className='character-details'>
        {/* <div className='center'> */}
          <div className=''>
            <figure>
              <img src={avatar} alt={name} />
            </figure>
          </div>
          <div className=''>            
            <h2>{name}</h2>
            <p>{gender}</p>
            <p>{origin}</p>
            <p>{specie}</p>
            <p>{status}</p>
            <p>{created}</p>
            <p>{location}</p>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Character;