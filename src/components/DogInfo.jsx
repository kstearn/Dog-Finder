import React, {useState} from 'react';
import BanList from './BanList';

const DogInfo = () => {
  const url = "https://api.thedogapi.com/v1/";
  const api_key = "live_2XlUR6A0OzXTtvyDXb4pDG8fn7LNNT7jqysM0xTU12ja2CZcC3DR01ytow3xVp94";

  const [dog, setDog] = useState({
    name: "",
    group: "",
    bred_for: "",
    weight: "",
    image: ""
  });

  const handleChange = () => {
    
    const fetchData = async () => {
      const response = await fetch(`${url}breeds?api_key=${api_key}`);
      const data = await response.json();
      
      let item = data[Math.floor(Math.random() * data.length)];

      while (list.includes(item.breed_group) ||
            list.includes(item.bred_for) ||
            list.includes(item.weight.imperial)) {
        item = data[Math.floor(Math.random() * data.length)];
      }

      
      setDog({
        name: item.name, 
        group: item.breed_group,
        bred_for: item.bred_for,
        weight: item.weight.imperial,
        image: item.image.url
      });  
    }
    fetchData();
  }

  const [list, setList] = useState([]);
  
  const handleBan = (e) => {
    if (!list.includes(e.target.innerHTML)) {
      setList(list => [...list, e.target.innerHTML]);
    }
  }

  
  return(
    <div className="mainContainer">
      <div className="DogInfo">
      {dog.name !== "" ? (
        <div className="infoContainer">
          <h2>{ dog && dog.name}</h2>
          <div className="attributesContainer">
            
            {dog.group ? (<div className="attribute" onClick={e => handleBan(e)}>{dog.group}</div>) : (<div></div>)}
            
            <div className="attribute" onClick={e => handleBan(e)}>{dog.weight} lbs</div>
            
            {dog.bred_for ? (<div className="attribute" onClick={e => handleBan(e)}>{dog.bred_for}</div>) : (<div></div>)}
            
          </div>
          <img src={dog.image} />
        </div>
      ) : (
        <div><h2>Click the button below to get started!</h2></div>
      )}
      
        <button onClick={handleChange}>🐾Discover!🐾</button>
      </div>
      
    <BanList list={list} setList={setList}/>
    </div>
    
  );
}

export default DogInfo;