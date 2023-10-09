import React, {useState} from 'react';

const BanList = (props) => { 
  
  const handleUnban = (e) => {
    let i = props.list.indexOf(e.target.innerHTML);
    props.setList(list => list.slice(0, i).concat(list.slice(i + 1)))
  }
  
  return (
    <div className="BanList">
      <h2>Ban List</h2>
      <p>Select an attribute in your listing to ban it</p>
      <p>{props.list.map(item =>
          <div className="attribute" onClick={e => handleUnban(e)}>{item}</div>)}</p>
    </div>
  );
}

export default BanList;