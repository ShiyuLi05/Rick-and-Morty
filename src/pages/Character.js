import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

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

  const isAlive = (status) => {
    if(status === 'Alive') {
      return true;
    } else return false;
  }
  
  return (
    <div className='center'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{`${name}`}</title>
      </Helmet>
      <div className='character-details'>
        {/* <div className='center'> */}
          <figure>
            <img src={avatar} alt={name} />
          </figure>
          <div className='detail'>            
            <h2>{name}</h2>
            <p>Gender: {gender}</p>
            <p className='gray'>Origin: {origin}</p>
            <p>
              <span className={isAlive(status) ? 'alive life' : 'life' }></span>
              <span>{status}</span> - <span>{specie}</span>
            </p>
            <p className='gray'>Last known location:</p><span>{location}</span>
            <p className='gray'>Created on {moment(created).format("MMM DD, YYYY")}</p>     
        </div>
      </div>
    </div>
  );
};

export default Character;