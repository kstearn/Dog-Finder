import React, {useState, useEffect} from 'react';

const DogInfo = () => {
  const url = "https://api.thedogapi.com/v1/";
  const api_key = "live_2XlUR6A0OzXTtvyDXb4pDG8fn7LNNT7jqysM0xTU12ja2CZcC3DR01ytow3xVp94";

  const [dog, setDog] = useState({
    name: "",
    group: "",
    bred_for: "",
    weight: "",
    origin: "",
    image: ""
  });

  const handleChange = () => {
    
    const fetchData = async () => {
      const response = await fetch(`${url}breeds`);
      const data = await response.json();
      console.log(data);
      let item = data[Math.floor(Math.random() * data.length)];

      const resp = await fetch(`${url}images/${item.reference_image_id}`);
      console.log(resp);
      const dat = await resp.json();
      let img_url = dat.url;
      
      await setDog({
        name: item.name, 
        group: item.breed_group,
        bred_for: item.bred_for,
        weight: item.weight.imperial,
        origin: item.origin,
        image: img_url
      });  
    }
    fetchData();
  }
  

  
  return(
    <div className="DogInfo">
      <h2>{ dog && dog.name}</h2>
      <div className="attributesContainer">
        <div className="attribute">{dog.group}</div>
        <div className="attribute">{dog.weight} lbs</div>
        <div className="attribute">{dog.bred_for}</div>
      </div>
      <img src={dog.image} />
      <button onClick={handleChange}>🐾Discover!🐾</button>
    </div>
  );
}

export default DogInfo;