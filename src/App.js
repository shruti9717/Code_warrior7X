import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const[characters, setCharacters] = useState(null);

  /*pagination
  const[currentPage, setCurrentPage] = useState(1);
  const[postsPerPage, setPostsPerPage] = useState(10);*/


  useEffect(() => {
    getData();


    async function getData(){
      const response = await fetch("https://www.breakingbadapi.com/api/characters");
      const data = await response.json();
  
  
      setCharacters(data);
    }

  }, []);


    /*pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const characters = character.slice(indexOfFirstPost , indexOfLastPost)*/



    return(
    <div className="container">
      <header><center><h1>Breaking Bad</h1></center></header>
      
      { }
      {characters &&(
        <div className="characters">

          {}
          {characters.map((character,index) =>(
            <div key={index}>
              <h1>
              <strong>{character.name}</strong></h1>
              
              <ul>
              <img src={character.img} alt='' width="300" height="300"/>
                
                <li>Nickname:{character.nickname}</li>
                <li>Birthday:{character.birthday}</li>
                <li>Occupation:{character.occupation}</li>
                <li>Status:{character.status}</li>
                <li>Potrayed:{character.potrayed}</li>
                <li>Appearence:{character.appearance}</li>
                <li>Quotes:{character.quotes}</li>
                <hr></hr>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )





}
export default App;